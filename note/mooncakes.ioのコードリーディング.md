# mooncakes.ioのコードリーディング

[moonbitlang/mooncakes.io: website of mooncakes.io, written in MoonBit](https://github.com/moonbitlang/mooncakes.io)

コンポーネントをどう分割するかなどを調べてみます。

### 画面ごとに、どうコンポーネントを分けているか

`src/main`が、色々なパッケージをまとめているパッケージ。`src/main/main.mbt`がエントリーポイントだと思われる。

`@tea.applicaiton`を使っている。`@tea.setup`というのを前は使った気がするけど、違いを確認しておきたい。`initialize=route`が何を指しているか把握する。

route、update、viewをそれぞれ見ていく。

```mbt
///|
fn main {
  @tea.application(
    initialize=route,
    update~,
    view~,
    url_changed=UrlChanged(_),
    url_request=LinkClicked(_),
  )
}
```

基本的には、現在のページに応じてviewを出し分けている。`@home.view(...).map()`と`map`を使っているのが気になる。`@home.view`がどのような定義になっているか見てみよう。

```mbt
fn view(model : Model) -> Html[Msg] {
  let page_view = match model.page {
    Home(page_model) => @home.view(page_model).map(GotHomeMsg(_))
    Docs(page_model) => @docs.view(page_model, x => GotDocsMsg(x))
    User(page_model) => @user.view(page_model).map(GotUserMsg(_))
    NotFound => @view.not_found()
    Redirect => @view.loading()
  }
  let theme_class = match model.theme {
    Light => "theme-light"
    Dark => "theme-dark"
  }
  let switching_class = if model.theme_switching {
    "theme-switching"
  } else {
    ""
  }
  @html.div(
    class="theme-root min-h-screen w-full \{theme_class} \{switching_class}",
    [page_view],
  )
}
```

`src/page/home/view.mbt`。

ここの`Model`は、`home`の`Model`のはず。色々なコンポーネントを作って、まとめているっぽい雰囲気。

コンポーネントは単位に`Html[Msg]`を返す関数として作っている。

`@view`が、ビュー用の共通パッケージ。`@view.page`を読みに行く。

```mbt
///|
pub fn view(model : Model) -> Html[Msg] {
  let module_list = if model.filter == "" {
    let pinned_modules = pinned()
    let recently_updated = match model.recent_modules {
      Loading => @view.loading()
      Failed => @view.load_failed("recently updated modules")
      Success(xs) => recently_updated(xs)
    }
    let all_modules = match model.all_modules {
      Loading => @view.loading()
      Failed => @view.load_failed("module indices")
      Success(xs) => all_modules(xs.indices)
    }
    div([pinned_modules, recently_updated, all_modules])
  } else {
    match model.all_modules {
      Loading => @view.loading()
      Failed => @view.load_failed("module indices")
      Success(_) => search_result(model.filtered_modules)
    }
  }
  let banner = if model.filter == "" {
    banner(
      total_lines=model.showing_lines,
      total_packages=model.showing_packages,
    )
  } else {
    nothing()
  }
  let theme_toggle = @view.theme_toggle(click=ToggleTheme)
  let hero = div(class="home-hero-shell pb-6 sm:pb-8", [
    @view.navbar(
      style=Fusion,
      middle=input(
        input_type=Text,
        value=model.filter,
        placeholder="Search modules ...",
        class="border rounded-full my-1 lg:my-0 w-full lg:w-[380px] text-sm lg:text-base px-4 py-2 bg-white/90 shadow-sm shadow-black/5 focus:border-mooncake2 focus:shadow-2xl outline-none transition-colors",
        input=FilterChanged(_),
      ),
      right=theme_toggle,
    ),
    div(class="hero-banner", [banner]),
  ])
  @view.page(header=hero, main=div(class="w-full", [module_list]))
}
```

`src/view/page.mbt`。特に難しいことはなかった。ヘッダーやフッターを渡して、レイアウトにコンテンツを埋めこむ役割。ということは、気になっていた`map`についてだが単に`Html[Msg]`に`map`が生えているということなんだろう。

`map`についてだが、ページごとの`Msg`を全体の`Msg`に変えているみたい。`Enum`を関数として使う用法があるように思える。

```mbt
///|
pub fn[M] page(
  header? : Html[M] = navbar(),
  main? : Html[M],
  footer? : Html[M] = footer(),
) -> Html[M] {
  div(class="w-full flex-col bg-zinc-50", [
    header,
    div(class="flex-1 min-h-screen", [
      div(
        class="container lg:px-4 h-full w-full flex flex-col md:flex-row relative md:gap-4",
        [main.unwrap_or_else(nothing)],
      ),
    ]),
    footer,
  ])
}
```

`Model`と`update`についても見ていく。まずは`Model`から。各`Model`を`Page`にまとめている。`Page`は全体の`Model`を構成している。

`@home.Model`を見る。

```mbt
///|
enum Page {
  Home(@home.Model)
  Docs(@docs.Model)
  User(@user.Model)
  NotFound
  Redirect
}
```

```mbt
///|
struct Model {
  theme : Theme
  page : Page
  theme_switching : Bool
}
```

`src/page/home/state.mbt`にある。`Msg`や`Update`もここで定義されている。

```mbt
///|
pub struct Model {
  recent_modules : Status[Array[ModuleIndex]]
  all_modules : Status[AllModules]
  filter : String
  filtered_modules : Array[ModuleIndex]
  showing_lines : Int
  showing_packages : Int
}
```

`Status`は、`Loading | Failed | Success`など、遅延実行した結果を表すやつっぽい。ここは`@util`パッケージで定義されている。`Thunk`とか出てきていて怖いぞ！

`Model`についてはシンプルなので、特に深追いしなくても大丈夫だろう。次は`update`を見ていく。`src/main/main.mbt`から。

パターンマッチで書かれている。テーマ切り替え中のところはちょっと冗長な感じがするけど、とりあえず読み飛ばす。

homeの更新に関するのは、`(GotHomeMsg(msg), Home(page_model)) => @home.update(msg, page_model) |> update_with(...)`というところだ。

`update`と`update_with`がどういう使い分けをされているのかが気になるところ。`@home.update`で`@home`のモデルを更新して、それを全体のモデルに昇格させている、みたいな感じと予想。

```mbt
///|
fn update(msg : Msg, model : Model) -> (Cmd[Msg], Model) {
  match (msg, model.page) {
    (ThemeSwitchDone, _) => (none(), { ..model, theme_switching: false })
    (GotHomeMsg(msg), _) if @home.is_theme_toggle(msg) =>
      start_theme_switch(model)
    (GotDocsMsg(msg), _) if @docs.is_theme_toggle(msg) =>
      start_theme_switch(model)
    (GotUserMsg(msg), _) if @user.is_theme_toggle(msg) =>
      start_theme_switch(model)
    (GotHomeMsg(msg), Home(page_model)) =>
      @home.update(msg, page_model)
      |> update_with(Home(_), GotHomeMsg(_), model.theme, model.theme_switching)
    (GotDocsMsg(msg), Docs(page_model)) =>
      @docs.update(msg, page_model)
      |> update_with(Docs(_), GotDocsMsg(_), model.theme, model.theme_switching)
    (GotUserMsg(msg), User(page_model)) =>
      @user.update(msg, page_model)
      |> update_with(User(_), GotUserMsg(_), model.theme, model.theme_switching)
    (LinkClicked(request), _) =>
      match request {
        Internal(url) => (@nav.push_url(url.to_string()), model)
        External(url) => (@nav.load(url), model)
      }
    (UrlChanged(url), _) => route_with_theme(url, model.theme)
    _ => (none(), model)
  }
}
```

`update_with`を見てみる。なんかそうなっているっぽいことはわかる。気になるのは`Home(_)`みたいな書き方だ。

```mbt
fn[SubModel, SubMsg] update_with(
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

とりあえず雰囲気は理解した。分からないところをAIにまとめてもらう。
