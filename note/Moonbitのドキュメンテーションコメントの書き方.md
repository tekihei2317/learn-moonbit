# Moonbitのドキュメンテーションコメントの書き方

mooncakes.ioでは、モジュールのパブリックなAPI？が表示される。コメントを書くと、そのページで説明が見れる。

書き方は特にルールはないが、1行目にそのモジュールの説明、空行を開けて、`# Example`で見出しを作って、その下にテストを書く、で良さそう。

以下は`moonbitlang/core/queue`のコード。

```mbt
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

コメントは、` ```mbt check `と書くことで、そのコードブロックのテストを実行できる。

テストブロックと同じように、`moon test -u`を実行すると、`inspect`にスナップショットが追加される。

他にも、`README.mbt.md`ファイルを作れば、そこのコードブロックのテストが同じように実行される。ドキュメントのコードが古くならないことを保証できるので、便利。

## 参考

- [Moonbit moon cli の便利機能達 - 組み込み lint, bench, snapshot, coverage, doc](https://zenn.dev/mizchi/articles/moonbit-useful-tips)
  - ` ```mbt check ` → コメントに対して型チェックする
  - ` ```mbt test ` → コメントを`test {...}`として実行する←これは無くなった？
  - ` ```moonbit ` → 表示するのみ、` ```mbt `でもできるのかな
- core
  - [mooncakes.io](https://mooncakes.io/docs/moonbitlang/core/array)
  - [mooncakes.io](https://mooncakes.io/docs/moonbitlang/core/queue)
