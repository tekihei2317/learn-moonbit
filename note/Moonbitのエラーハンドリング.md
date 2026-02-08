# Moonbitのエラーハンドリング

よくわからないので調べます。

- throw Error
- エラーにはどのようなものがあるか
- raise
- Result
- abort、abortとraiseは違うのか
- guardの使い方
- fail、Failure

## メモ

### [Error handling — MoonBit v0.7.1 documentation](https://docs.moonbitlang.com/en/latest/language/error-handling.html)

`Error`は一般的なエラーを表す型。

値として使うことはできないので、エラーを使いたい場合は、`suberror`を定義する必要がある。

`suberror`は`enum`みたいな感じ。

`suberror`は`Error`のサブタイプになっているので、代入可能。

`Error`は色々なエラーの型を含んでいるため、パターンマッチする場合は必ずワイルドカード`_`を含める必要がある。

組込みのエラー型として`Failure`がある。また、`Failure`を起こすための`fail`関数がある。`fail`関数はエラーが起きた行数などを自動で表示してくれるので、常に`Failure`より`fail`を使うことが推奨される。

Q. Failureと、suberrorで定義したエラーは機能として違いがあるんだろうか？

例外を起こす関数には、`raise`キーワードを使って定義する必要がある。`raise SomeError`で、起こす可能性のあるエラーを明示する。

`raise Error`は任意のエラーを起こすことを表し、`raise`と省略できる。

Q. `raise SomeError | AnotherError`みたいなのもできる？

トレイト境界という概念は未理解けど、TypeScriptの型パズルのextendsと同じような感じっぽい。

`noraise`キーワードもある。これは省略しても同じだろう。

（Error Polymorhismのところは難しそうなので、後で戻ってくる。）

エラーハンドリングには`try ... catch ... noraise`を使う。`catch`は起こりうるエラーをパターンマッチで処理する。`noraise`は、エラーが起きなかった場合の処理を書く。省略可能。

`try`が受け取るのは式。tryキーワードも省略できる。

`try?`で、エラーを起こす関数の実行結果を`Result`に変換できる。

Q. `try!`はエラーが起きたときにパニックさせる関数？

`try`ブロックで複数の種類のエラーが発生する場合は、`Error`型として推論される。つまり、ハンドリングにはワイルドカード`_`を含める必要がある。

↑これを聞くと、複数の種類のエラーを`raise`に指定するのはできなさそう？

（続き）Error polymorphismのところを読んで、Q.のところを実際に試して理解する。ソースコードも読む。
