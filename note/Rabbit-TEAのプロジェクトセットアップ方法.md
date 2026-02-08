# Rabbit-TEAのプロジェクトセットアップ

Rabbit-TEA + Vite + Tailwind CSS。

`Rabbit-TEA` 用の Vite プラグインがあるので、それを使用する。

- インストール（Rabbit-TEA、TailwindCSS）
- Viteの設定を書く
- Moonbitを書く
- HTMLとCSSを書く
- serveして確認する

## インストール(Rabbit-TEA、Tailwind CSS)

JavaScript用にコンパイルする必要があるので、`moon.mod.json` に `"preferred-target": "js"` を追加しておく。

```json
{
  "name": "datore-clone",
  "preferred-target": "js"
}
```

追加し忘れたらVSCodeでエラーが出るので、その場合は `moon.mod.json` を直してから `moon clean`（または `_build` を削除）すればOK。

続いて、Rabbit-TEA と Tailwind CSS をインストールする。パッケージマネージャーは `bun` を使うことにする。

```bash
moon add Yoorkin/rabbit-tea
bun add -D @tailwindcss/vite rabbit-tea-vite
```

`package.json` に `"type": "module"` と `scripts` も追加しておく。

`"type": "module"` が必要なのは、`vite.config.js`をESMで書く（`import ...`を使う）ため。代わりに`vite.config.mjs`にしてもOK。

```json
{
  "dependencies": {},
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.18",
    "rabbit-tea-vite": "^1.0.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "type": "module"
}
```

## 設定ファイルとHTML/CSSを書く

`vite.config.js` を書く。

```js
import { defineConfig } from "vite";
import rabbitTEA from "rabbit-tea-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [rabbitTEA(), tailwindcss()],
});
```

HTML、CSSを追加する。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="/styles.css" />
    <script src="/main.js" type="module"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

```

```css
@import "tailwindcss";
```

## Moonbitを書く

Rabbit-TEA は `main/` ディレクトリ・パッケージを作ることが想定されているっぽいので、`main/main.mbt` を作る。

`main/moon.pkg.json` で、必要なパッケージをインストールする。パッケージのパス `/` で区切られた最後の部分が、`@package` みたいな感じで呼び出せる。ここでは `rabbit-tea -> tea` にリネームしている。

```json
{
  "is-main": true,
  "import": [
    { "path": "Yoorkin/rabbit-tea", "alias": "tea" },
    "Yoorkin/rabbit-tea/html"
  ]
}
````

カウンターアプリを実装。

```mbt
///|
using @tea {none}

///|
using @html {h1, div, text, button}

///|
using @tea {type Cmd}

///|
using @html {type Html}

///|
type Model = Int

///|
enum Msg {
  Increment
  Decrement
}

///|
fn update(msg : Msg, model : Model) -> (Cmd[Msg], Model) {
  match msg {
    Increment => (none(), model + 1)
    Decrement => (none(), model - 1)
  }
}

///|
fn view(model : Model) -> Html[Msg] {
  div([
    h1([text(model.to_string())]),
    button(click=Increment, [text("+")]),
    button(click=Decrement, [text("-")]),
  ])
}

///|
fn main {
  let model = 0
  @tea.startup(model~, update~, view~)
}
```

カウンターが表示されればOK。

![カウンター画像](https://i.gyazo.com/e4ee19c9e0d270ce1acdaa4abf330c6a.png)

## 参考

- [moonbit-community/rabbita: A simple, declarative, functional web UI framework](https://github.com/moonbit-community/rabbita)
- [moonbit-community/rabbit-tea-template: a MoonBit web app template using Rabbit-TEA with TailwindCSS](https://github.com/moonbit-community/rabbit-tea-template)
