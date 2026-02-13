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

### [Moonbit moon cli の便利機能達 - 組み込み lint, bench, snapshot, coverage, doc](https://zenn.dev/mizchi/articles/moonbit-useful-tips)

`moon check`について。リンター。

未使用変数などでも警告が出る。

警告をエラーにする設定が`--deny-warn`。

また、どれをwarningにするかの設定もできる。設定項目は、`moonc build-package -warn-help`で確認できる。

コメントに対してテストを実行したり、ドキュメント`*.mbt.md`に対してテストを実行することもできる。これは実際に試してみよう。

`moon coverage`がある。

`moon doc StringView`などで、型のメソッド一覧が見れる。マジですか。エージェントに教えておいた方が良い。これは標準ライブラリ以外でも確認できるんだろうか。

`moon bench`でベンチマークが取れる。パフォーマンスを改善したい場合に使おう。

### [MoonBit 0.8.0 Released | MoonBit](https://www.moonbitlang.com/blog/moonbit-0-8-0-release)

Moonbit 0.8.0がリリースされたみたいなので、読む。

ちょっとした変化ではなく、いろいろな面で変化があったと書かれている。

language semantics, error handling, package manegement, developer tooling

package managementは、`moon.pkg.json`から`moon.pkg`に変わっていたような気がする。多分`moon fmt`で修正されたのかなと思ってた。それぞれの要素を確認していこう。

AIのサポートについて。これ面白いな。`declare`キーワードで、これから実装するものを定義することができる。実装がまだだとwarningが出るので、AIはそのwarningを見ながら、少しずつ仕様を満たすように開発を進めることができる。

具体的にどのようにやるのかは書かれていないが、試してみたい。

**Language Update**

suberrorの定義の方法が変わった？

全体的に知らないことが多くて理解できていない。

wasm-gc / native / LLVM backendで、panicした時のスタックトレースが見れるようになった。

declareの使い方も書いてある。型を定義したり、関数を定義したり。traitは知らない。

forのrange expressionが、逆向きも使えるようになっている。`0..<=4` ←→ `4>=..0`、`0..<4` ←→ `4>..0`かな。`x..=y`は、一貫性のために`x..<=y`に変わった。

structのスプレッドが、`priv`フィールドがある場合に、他のパッケージで使えなくなった。

`lexmuch`なんていうのがあるんだ...

StructのConstructorを定義できるようになった？今まではどうだったんだろう。詳細が色々書かれているが読み飛ばす。

Debugトレイトが追加された。DebugトレイトはShowトレイトの発展版で、読みやすく整形してくれる。ignoreを指定して、特定のフィールドを省略できる。これは、そのフィールドが他のライブラリの値を持っていて、それらにDebugトレイトを付与できない場合に有用。

12.が続きから。これwarningが出たから修正したところだ。コンストラクタを直接高階関数として使えなくなる。なるほど、そういう用法だったのか。無名関数を定義して、関数を呼び出す。なお、パイプラインではそのまま使える。EnumのCaseも、コンストラクタだからこの用法ができたんだな、納得。

ローカル関数でのエフェクト（async / raise）の推論が行われなくなった。明示的に指定する必要がある。なお、アロー関数の場合は推論が行われるので、コールバックではアロー関数の使用が今後は推奨されるとのこと。

`x..f()`は何のことかわからないので省略。

`for {} else {}`が`for {} nobreak {}`に変わった。これはループが正常に終了した場合に何かを実行するためのもの。

**Toolchain update**

`moon.pkg.json`が非推奨になり、`moon.pkg`に変わった。これは`moon fmt`で自動で適用される。`rabbit-tea-vite`が`moon.pkg`に対応してなかったっぽくて、昨日これでエラーになった。

`moon test`に`-j`オプションが追加。並列で実行される。

`moon test`に`--outline`オプションが追加。テストのリストを確認できる。これ欲しかったやつだ！

`moon test`の`--index`オプションに範囲を指定できるようになった。`moon test path/to/file --index 0-2`など。`--index`オプションは、ファイルを指定して使う必要がある。

`moon install`が、プロジェクトの依存をダウンロードするためではなく、コマンドをグローバルインストールするためのものに変わった。つまり、`npm install`から`cargo install`や`go install`っぽく変わった。依存のダウンロードは、`moon check`や`moon build`を実行した時に自動で実行される。

`moon install`でインストールするパッケージは、`is-main: true`が指定されていて、かつnative backendをサポートしている必要がある。

`moon -C <path>`オプションで、コマンドが実行されるディレクトリを変えられるようになった。例えば、`moon -C a/ run`を一度実行したら、以降はパスを指定したときは`a/`からの相対パスになる。←何に使うんだろう

`moon new`が生成するテンプレートがシンプルになった。skillsの説明された。←これはコーディングエージェントのものだろうか。

`mbt.md`ファイルの、依存を表現するための方法が改善された。aliasが衝突する問題が解決されたそう。使ったことない。

`moon fetch`コマンドが追加された。これはプロジェクトの依存に追加せずに、パッケージをダウンロードしてくるもの。`.repos/`にダウンロードされる。これはAIエージェントにコードを読んでもらうときに役に立つ。

`moon fmt`が空行を維持するようになった。これ圧縮されるのいいなと少し思っていたのでそうなんだという感じ。複数行の空行は1行に圧縮される。馴染みのある`prettier`と同じ挙動だ。

`mbt.md`ファイル内やドキュメンテーションコメントの、`moonbit`コードブロックが型チェックを受けなくなる。なお、`moonbit`は`moonbit nocheck`に`moon fmt`で修正される。

その他、標準ライブラリは主に`moonbitlang/async`が変更がある。

最後にIDEの変更も少しある。`moon ide`に`moon ide hover`サブコマンドが指定できるようになった。`--loc`とシンボルをオプションで指定して、その場所にあるシンボルの情報を確認できる。

`moon ide`に`moon ide rename`コマンドが追加された。シンボルをリネームするpatchを作成するコマンド。patchのフォーマットは、OpenAI Codexが使用するものと同じ。コーディングエージェントに効率的にリネームしてもらうのに効果的。

#### ちょっと整理してみよう。

コーディングエージェントむけのものから。

- `declare`で未実装のシンボル（型、関数等）を宣言できる。`declare`で宣言したものは`warning`になるので、AIエージェントに段階的に実装してもらうのに役にたつ。
- `moon fetch`コマンドで、`.repo/`ディレクトリにモジュールを取得できるようになった。AIエージェントにライブラリのコードを読んでもらうときに役にたつ。
- `moon ide hover <symbol> --loc <loc>`で、指定した場所にあるシンボルのドキュメントを確認できる。
- `moon ide rename <symbol>`で、シンボルのリネームができる。

個人的に影響がありそうなもの。

- コンストラクタを、パイプライン以外の場面で関数として直接使用できなくなった。`(x) => Some(x)`のような無名関数を定義して使う必要がある。
- `moon.pkg.json`が`moon.pkg`に変わった。`moon fmt`で自動で修正される。他のツールが対応していない場合に注意が必要。
- `moon install`がプロジェクトへの依存のダウンロードから、グローバルにコマンドをインストールするためのものに変わった。依存のダウンロードは`moon build`や`moon check`で自動で行われる。
- `moon fmt`が空行を維持するようになった。複数行の空行は1行にまとめられる。Prettierと同じ挙動。
- `moon test`に`--outline`オプションが追加された。実行されたテストを一覧で見ることができるようになった。
