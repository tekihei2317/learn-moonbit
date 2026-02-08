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

「model~ はキーワード引数 model=model の省略形。」これ知らなかった。

ライブラリのドキュメントあんまりないので、少し複雑なことをしようとすると、ソースコード読んでなんとかする必要があるかも。

非同期周りはまだ知らないけど、タイマー実装するためには必要なので、理解しておきたい。

### [Moonbit がもう少しで実用できそうな気配](https://zenn.dev/mizchi/articles/how-to-write-moonbit)

「CLIでHTTPリクエストを投げて、JSONパースして表示する」をできたら最低限揃っているはず。

> 環境変数を取得する moonbitlang/x/sys の @sys.get_env_vars()

> 引数を参照する moonbitlang/core/env の @env.args()

> HTTP Request を送る moonbitlang/async/http の @http.post

> JSON をパースして struct にマッピングする derive(FromJson, ToJSon)

引数の取得はは`@sys`を使った記憶がある。deriveのtypoがある。Webアプリ作るとなると、HTTPリクエスト関連の便利ライブラリ欲しいな、という気持ちになりそう。

言語仕様の調べ方、のセクションに色々情報がまとめられているので、迷ったらここら辺を見よう。

Moonbit Tourは最後の方がまだ見れていない（ジェネリクス、Traitのところ）。

Weekly Updateも迷ったら見るといいらしい。

moobitlang/coreにあるコードは大体正しいので、迷ったらこれをAIに読ませたらよいとのこと。

Rabbit-TEA作ってるYoorkinさん、コア開発者なんだ。

Moonbit Tourだけの知識でこちらの記事のコードは書けないので、コードを色々読んで調べていこう。

### [MoonBit で JS FFI を書こう！](https://zenn.dev/mizchi/articles/moonbit-js-ffi)

Moonbitでjs backendを使う場合のことが書かれているっぽい。公式のおすすめ記事が紹介されている。

MoonbitはJS以外にもwasm、nativeのコードを生成できるが、jsはブラウザ・サーバーと適用領域が広いので、まずはjsから運用していけばよい。

`"preferred_target": "js"`を設定すると、`moon build`や`moon test`で`--target js`を省略できる。

JSを出力する場合は、`main`関数をエントリポイントに指定するか、指定したシンボルをexportするかの2つの方法がある。それぞれの設定方法は記事参照。

`extern "js"`でjs backendのときにのみ使える関数を定義する。

生成コードのことを全然イメージしていなかったけど、最初は確認した方がよいみたいだ。そりゃそうか。

`%identity`のところで一気にわからなくなった。CodexもMoonbitでJSの機能を使うときに苦戦していた、scriptタグに頑張って書いてたりしていたので、このあたりは先述の公式の記事を読んで勉強しておこう。

### [Introducing MoonBit package manager: mooncakes.io | MoonBit](https://www.moonbitlang.com/blog/intro-to-mooncakes)

mooncakes.ioの使い方が書いているので、読む。

やっぱり、以下を読んだ方が良いかもしれない。

### [MoonBit's Package Manager Tutorial — MoonBit v0.7.1 documentation](https://docs.moonbitlang.com/en/latest/toolchain/moon/package-manage-tour.html)

- moon.mod.jsonが、公開するのに必要な最小の単位
- モジュールの中に、パッケージが複数ある。パッケージは、`moon.pkg.json`のあるディレクトリのこと。
- moon.pkg.jsonと同じ階層にある`.mbt`ファイルのみが、そのモジュールに属する？
  - フラットパッケージ推奨ということかな？

`moon register`、`moon login`でアカウント登録、ログインができる。

とりあえず、自分のGitHubアカウントで登録してみる。

`moon update`で、レジストリのインデックスを更新する。どのパッケージにどのバージョンがあって〜みたいな情報かな。

`moon new`でプロジェクトを作成する。最小構成のものはあるかな。画像だといろいろ選択できるように見えるんだけど、`moon new`したらいきなりいろいろ作られた。テンプレート選択機能みたいなのが欲しい。

とりあえず手動でhelloプロジェクトを作成してみる。moon.mod.jsonを作る、nameは必須。

モジュールを追加するには、`moon add <module>`を使うか、`moon.mod.json`を手動で編集する。

```bash
moon add Yoorkin/example/list
```

階層が複数に区切られているのが気になる。npmは`username/package`とかだったけど、自由なんだろうか。

`.mooncakes`ディレクトリに型検査が走ってエラーが出ているのが気になる。

ローカルな依存をインストールすることもできる。`moon.mod.json`に、依存の名前と相対パスを書く。

パッケージのバージョンを指定し忘れているとクラッシュしたので、バージョンの指定が必要。

インポートするときには、モジュールじゃなくてパッケージのパスを指定するので、`username/package/module`みたいになりそう。

`Yoorkin/example/list`はモジュール兼パッケージになっているのかな。試してみたらそういうのもできるっぽい。

パッケージをインポートするときは、パッケージのパスの/で区切られた最後のパートが`@package`みたいな感じで使える。エイリアスをつけることもできる。

`Yoorkin/example/list`を使ってみる。と思ったけど、言語のアップデートで動かなくなっているので、とりあえずOK。

最後に、パッケージを公開する方法について。セマンティックバージョニングに従うこと。

他にフィールドとしては、

- license
- keywords
- repository
- description
- homepage

などを主に指定する。

`///`で、ドキュメンテーションコメントを書ける。

---

実際に作ってみよう。`hello`モジュールを作成する。

- GitHubリポジトリを作る。`hello.mbt`とかでOK。
- `moon.pkg.json`を書く。パッケージ名、バージョン、ライセンス、リポジトリ、説明、ホームページを記入する。
- `moon.mod.json`を書く。これもトップレベルに置いていいかな。
- `@hello.hello_world`、`@hello.greeting(name)`みたいな関数を作る。
- ドキュメンテーションコメントを書く。
- mooncakes.ioに公開する。

できた。

- [tekihei2317/hello.mbt](https://github.com/tekihei2317/hello.mbt)
- [mooncakes.io](https://mooncakes.io/docs/tekihei2317/hello)

mooncakes.ioの方の反映には、しばらく時間がかかるっぽい。

### [MoonBit 最高 2025](https://zenn.dev/mizchi/articles/moonbit-is-good-2025)


関数パイプライン使ったことなかった。F#スタイルで、値が第一引数として渡される。

`assert_eq(add(1, 2), 3)`を`1 |> add(2) |> assert_eq(3)`みたいに書ける。

引数は、`a~`がキーワード引数で、`b?`はオプショナルなキーワード引数。オプショナルにしたら自動的にキーワード引数になったはず。

キーワード引数は、`fn(a=value)`のように呼び出す。また、`fn(a=a)`は`fn(a~)`と書ける。

inspectのcontentはインラインスナップショットと呼ばれる機能。`moon test -u`を実行すれば、`content`の中身が自動で埋められる。

これテストの値を変えたときに自分で書き換えなくていいから便利。`content`が目的のものになっているか確認すればOK。

Enumは値として使うときは`Action::Increment`みたいに書けばいいのか。知らなかった。

例外についてはこれから公式ドキュメントを読む。例外を起こす関数はraiseシグネチャをつける必要がある。raiseをつけていない関数は、全ての例外を処理しなければならない。

> 一番信頼できる情報源が Weekly Update と moonbitlang/core の実装です。

> コア開発者らのパッケージである　moonbitlang, bobzhang, tonyfettes, peter-jerry-ye, illusory0x0　氏らが比較的品質が高いです。

ここは頭の片隅に置いておこう。

> 真面目に設計しようとすると、TypeScript 的な Union ではなく Rust 的なtrait と enum で考える必要があります。

最後の感想が書かれているところ。traitを使ったことがないから分からないけど、そうらしい。
