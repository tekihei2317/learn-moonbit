# Moonbitのドキュメンテーションコメントの書き方

- ` ```mbt check ` → コメントに対して型チェックする
- ` ```mbt test ` → コメントを`test {...}`として実行する
- ` ```moonbit ` → 表示するのみ、` ```mbt `でもできるのかな

やること

- コメント内での`mbt check`と`mbt test`で両方試してみて、違いを確認する
- サンプルライブラリにコメントを追加して、結果を確認する
- コメントの書き方についてまとめる

## 参考

- [Moonbit moon cli の便利機能達 - 組み込み lint, bench, snapshot, coverage, doc](https://zenn.dev/mizchi/articles/moonbit-useful-tips)

## メモ

標準ライブラリで、どのように書かれているかを確認してみることにしよう。

[mooncakes.io](https://mooncakes.io/docs/moonbitlang/core/array)

Arrayを見てみる。使い方が色々書かれている。

これは`README.mbt.md`を作って、それに対してテストを実行しているっぽい。テストには全部`inspect`を使っている。

それ以外は、`ArrayView`と`zip_with`が、`mooncakes.io`上でドキュメントが表示されている。ここはコメントを書いていると思うので、コードを見に行こう。

```mbt
///|
///
/// A `ArrayView` represents a view into a section of an array without copying the data.
///
/// # Example
///
/// ```mbt check
/// test {
///   let arr = [1, 2, 3, 4, 5]
///   let view = arr[1:4] // Creates a view of elements at indices 1,2,3
///   inspect(view[0], content="2")
///   inspect(view.length(), content="3")
/// }
/// ```
#deprecated
pub type View[T] = ArrayView[T]
```

`mbt check`で書いているみたい。`mbt test`じゃないのはなぜだろう。これでもテスト実行されるんだろうか。

```mbt
///|
/// Zips two arrays into a single array by applying a function to each pair of elements.
///
/// Parameters:
///
/// * `l` : The first array.
/// * `r` : The second array.
/// * `merge` : A function that takes two arguments, one from each array, and returns a value.
///
/// Returns an array containing the results of applying the function to each pair of elements.
///
/// Example:
///
/// ```mbt check
/// test {
///   let arr1 = [1, 2, 3]
///   let arr2 = [4, 5, 6]
///   let add = (a, b) => a + b
///   inspect(@array.zip_with(arr1, arr2, add), content="[5, 7, 9]")
/// }
/// ```
pub fn[A, B, C] zip_with(
  l : Array[A],
  r : Array[B],
  merge : (A, B) -> C raise?,
) -> Array[C] raise? {
  let length = if l.length() < r.length() { l.length() } else { r.length() }
  Array::makei(length, i => merge(l[i], r[i]))
}
```

こちらは`Parameters:`セクションと`Example:`セクションがある。

特にパラメーターのフォーマットとかは決まっていなさそう。Markdownとして書いている。

`ArrayView`では見出しを使っているが、`zip_with`では見出しを使っていない。これはどちらかに統一した方がよさそう。APIを見るとしたら`mooncakes.io`だと思うので、そこでどのように表示されるか次第。

→`#`で書いていてもめちゃくちゃ小さく表示されているので、現状は見出しは使わなくてよさそう。

`String`パッケージ、`Queue`パッケージも見てみることにする。

`String`パッケージは、特に詳しくは書かれていない。引数とかは見たらわかるような命名をすべきで、それが難しい場合に書くだけでよさそう。

[mooncakes.io](https://mooncakes.io/docs/moonbitlang/core/queue)

次はQueueを見る。こちらは結構しっかり、各関数にExampleが書かれているっぽい。

フォーマットが統一されていて分かりやすい。この感じで書くと良さそう。

あと今更だけど、mooncakes.ioにはpublicなAPIが全部表示される、ということだよね。

```
///|
/// Get the length of the queue.
///
/// # Example
/// ```mbt check
/// test {
///   let queue : @queue.Queue[Int] = @queue.new()
///   assert_eq(queue.length(), 0)
/// }
/// ```
pub fn[A] Queue::length(self : Queue[A]) -> Int {
  self.length
}

///|
/// Checks if the queue is empty.
///
/// # Example
/// ```mbt check
/// test {
///   let queue : @queue.Queue[Int] = @queue.new()
///   assert_true(queue.is_empty())
/// }
/// ```
pub fn[A] Queue::is_empty(self : Queue[A]) -> Bool {
  self.length == 0
}
```
