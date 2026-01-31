# moonbitプロジェクトの作り方

`moon new <project>`すれば作れますが、最小構成で動かしてみます。

## Hello, worldする

なんかパッケージの準備が必要かなと思っていたのですが、`scripts/hello.mbt`を書くだけでHello, worldできました。

```mbt
///|
fn main {
  println("Hello, world!")
}
```

```bash
moon run script/hello.mbt
```

本格的に開発するとなるとモジュール管理が必要になるので、それについては別のページに書きます。
