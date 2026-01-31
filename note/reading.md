# 読み物

mizchiさんがZennで色々発信してくれているので、まずはそこから気楽に読みます。書き方分からないときにどこをあたればいいかが書かれた記事かスクラップがあったはず。

### [MoonBit が WebAssembly 時代の理想(の原型)だった](https://zenn.dev/mizchi/articles/introduce-moonbit#%E9%80%9F%E7%BF%92-moonbit)

1年半前の最初の記事。

迷ったら公式のexamplesを見る。今は`legacy/examples`に変わっている。

データ構造の実装（AVL Tree）とか、ブラウザを使ったゲーム、Clourflare Workersの使用例など色々あるので、ざっとみておくと良さそう。

### [自分が Moonbit 言語について知っていること](https://zenn.dev/mizchi/articles/practical-moonbit)

引き続き古い記事も読んでみる。

MoonbitのチーフアーキテクトはBuckleScript（ReScript）を開発していたHongbo Zhang氏。BuckleScriptはOcamlをJSに変換するやつ。

Discordサーバーがある。情報に飲まれそうなので参加はしない。

[Updates | MoonBit](https://www.moonbitlang.com/updates)

最新機能のアップデートはこちらで紹介される。今は1ヶ月ごとに記事が投稿されている。

コンパイラはOcamlで書かれていて、GitHubで公開されている。

コアライブラリは[moonbitlang/core: MoonBit's Core library](https://github.com/moonbitlang/core)にある。これも使用例として読んでみると良さそう。

標準ライブラリを使うのところ。`core`パッケージにあるものは、特別にインポートせずに使うことができる。名前空間付きでアクセスするものと、そうでないものがあるのは知らなかった。

queueを使いたかったので、助かります。

```mbt
fn main {
  // core に含まれてトップレベルの名前空間でアクセスできる例
  let list: List[Int] = List::[]
  let array: Array[Int] = Array::[]
  let tuple: (Int, Int) = (1, 2);
  let r: Ref[Int] = { val: 1 }

  // core に含まれるが名前空間付きでアクセスするものの例
  let hm: @hashmap.HashMap[Int, Int] = @hashmap.HashMap::[]
  let vec: @vec.Vec[Int] = @vec.Vec::[]
  let set: @immutable_set.ImmutableSet[Int] = @immutable_set.ImmutableSet::[]
  let queue: @queue.Queue[Int] = @queue.Queue::[]
  let stack: @stack.Stack[Int] = @stack.Stack::[]
  let rand_int = @random.RandomInt::new(10);
}
```

グローバル変数を使うには、トップレベルで`Ref[T]`型を宣言する。普通に宣言するとエラーになって諦めていた。

ライブラリを公開する方法が書かれている。タイピングゲーム用のライブラリを実装しようと思っていたので、そのときに参考にしたい。

main関数の実行について。`<dir>/moon.pkg.json`が`"is_main": true`のとき、`moon run dir`でmain関数が実行できる。これはパッケージの場合で、スクリプトにmain関数を書いて実行することもできる。

「testの実行〜」以降の章は、Wasmの知識が足りなくて分からなそうだったため一旦ここまでとする。

### [Moonbit の宣言的UIライブラリ Rabbit-TEA を試してみる](https://zenn.dev/mizchi/articles/try-moonbit-rabbit-tea)

（続きここから）
