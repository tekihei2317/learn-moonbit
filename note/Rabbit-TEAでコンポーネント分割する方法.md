# Rabbit-TEAでコンポーネント分割する方法

(Codexによるまとめ)

Rabbit-TEA は TEA (The Elm Architecture) なので、分割の基本は「状態(Model)とメッセージ(Msg)の境界を決める」こと。
このメモでは、実際に分割する時の型構造と、`Html.map` / `Cmd.map` をどう使うかをまとめる。

## 分割の方針 (ざっくり)

1. **見た目だけの部品**
   - `Model` や `update` を持たず、`view` 関数だけを切り出す。
   - 親の `Msg` をそのまま使うので `map` は不要。

2. **状態を持つ部品 (子コンポーネント)**
   - 子は `Model / Msg / init / update / view` を持つ。
   - 親は `ChildMsg` を `Msg` に持ち上げるラッパーを用意する。
   - 親の `view` は `child.view(...).map(ChildMsg(_))` の形になる。
   - 親の `update` は `child.update(...)` の結果を `Cmd.map` で持ち上げる。

3. **ページ単位の分割**
   - `Page` を `enum` にして「現在のページの Model」を持つ。
   - `view` で `Page` を分岐し、各ページの `view` を `map` で持ち上げる。
   - `update` で `Page` を分岐して各ページに委譲する。

## 最小テンプレ (状態を持つ子コンポーネント)

### 子 (child)

```moonbit
// child/state.mbt
pub struct Model { count : Int }

pub enum Msg {
  Inc
  Dec
}

pub fn init() -> (Cmd[Msg], Model) {
  (none(), { count: 0 })
}

pub fn update(msg : Msg, model : Model) -> (Cmd[Msg], Model) {
  match msg {
    Inc => (none(), { ..model, count: model.count + 1 })
    Dec => (none(), { ..model, count: model.count - 1 })
  }
}

pub fn view(model : Model) -> Html[Msg] {
  div([
    button(click=Dec, [text("-")]),
    text(model.count.to_string()),
    button(click=Inc, [text("+")]),
  ])
}
```

### 親 (parent)

```moonbit
// parent/state.mbt
pub struct Model {
  child : @child.Model
}

pub enum Msg {
  Child(@child.Msg)
  // 他の Msg...
}

pub fn init() -> (Cmd[Msg], Model) {
  let (cmd, child) = @child.init()
  (cmd.map(Child(_)), { child })
}

pub fn update(msg : Msg, model : Model) -> (Cmd[Msg], Model) {
  match msg {
    Child(child_msg) =>
      let (cmd, child) = @child.update(child_msg, model.child)
      (cmd.map(Child(_)), { ..model, child })
  }
}

pub fn view(model : Model) -> Html[Msg] {
  @child.view(model.child).map(Child(_))
}
```

ポイント:
- `Child(_)` は「コンストラクタを関数として使う」記法。
- `Html.map` と `Cmd.map` で Msg を「持ち上げる」。
  - `Html.map` は VDOM 全体を map するので重い (rabbita/src/html/html.mbt 参照)。
  - それでも必要なときだけ使う (子 Msg → 親 Msg 変換)。

## update_with パターン (共通関数化)

子への委譲が増えると冗長になるので、共通関数を作るパターンが便利。

```moonbit
fn update_with[SubModel, SubMsg](
  pair : (Cmd[SubMsg], SubModel),
  to_page : (SubModel) -> Page,
  to_msg : (SubMsg) -> Msg,
  theme : Theme,
  theme_switching : Bool,
) -> (Cmd[Msg], Model) {
  let (cmd, model) = pair
  (cmd.map(to_msg), { theme, page: to_page(model), theme_switching })
}
```

- `to_page` / `to_msg` にコンストラクタ関数 (`Home(_)`, `GotHomeMsg(_)`) を渡す。
- 子の `update` から返ってきた `Cmd[SubMsg]` と `SubModel` を親に昇格する。

## ページ分割の典型構成

```moonbit
enum Page {
  Home(@home.Model)
  Docs(@docs.Model)
  NotFound
}

enum Msg {
  GotHomeMsg(@home.Msg)
  GotDocsMsg(@docs.Msg)
}

fn view(model : Model) -> Html[Msg] {
  match model.page {
    Home(m) => @home.view(m).map(GotHomeMsg(_))
    Docs(m) => @docs.view(m).map(GotDocsMsg(_))
    NotFound => @view.not_found()
  }
}

fn update(msg : Msg, model : Model) -> (Cmd[Msg], Model) {
  match (msg, model.page) {
    (GotHomeMsg(m), Home(pm)) =>
      @home.update(m, pm)
      |> update_with(Home(_), GotHomeMsg(_), model.theme, model.theme_switching)
    (GotDocsMsg(m), Docs(pm)) =>
      @docs.update(m, pm)
      |> update_with(Docs(_), GotDocsMsg(_), model.theme, model.theme_switching)
    _ => (none(), model)
  }
}
```

## 参考 (rabbita の API)

- `Html.map` は `rabbita/src/html/html.mbt` に実装。
- `Cmd.map` は `rabbita/src/cmd/command.mbt` に実装。
- `@tea.application` / `@tea.startup` は `rabbita/src/top.mbt`。
  - `application`: URL 変化を扱うアプリ向け。
  - `startup`: ルーティングが不要な単純アプリ向け。
