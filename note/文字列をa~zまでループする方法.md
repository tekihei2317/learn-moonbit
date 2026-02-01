# 文字列をa~zまでループする方法

数字だとRangeで`for i in 1..10 {}`とかできるんですけど、Charだとできないっぽい。

なので、一度Intに変換して足してから、Charに戻すことにする。

Char -> Intは`Char::to_int()`、Int -> Charは`Int::unsafe_to_char`または`Int::to_char`を使う。unsafeじゃない方は`Char?`が返ってくる。


```mbt
///|
fn next_char(char : Char) -> Char {
  Int::unsafe_to_char(char.to_int() + 1)
}

///|
test "loop a to z" {
  let mut result = ""
  for char = 'a'; char <= 'z'; char = next_char(char) {
    result += char.to_string()
  }
  inspect(result, content="abcdefghijklmnopqrstuvwxyz")
}
```

他にも色々方法はある。

## 探し方

Charのメソッドを見ると、`Char::to_int()`が見つかる。

定義元にコードジャンプすると`Char::from_int()`も見つかる。これは

```text
Use `Int::unsafe_to_char` instead, and use `Int::to_char` for safe conversion
```

とのことなので、`Int::unsafe_to_char`を使えば良い。

## メモ

StringのAPIはここを見ればいい。moonbit string mooncakesで検索した。

[mooncakes.io](https://mooncakes.io/docs/moonbitlang/core/string)

とりあえずざっと使い方を確認しておこう。

- String::from_arrayで、Charの配列からStringを作れる
- String::defalt()は""と同じかな
- str.iter()でイテレーターとれる。str.iter().collect()はCharの配列を返す。
- striter2()でインデックスと一緒に。
- str.to_array()でCharの配列にできる。

最低限の使い方が載っているだけで、全部のAPIが載っているわけではないので、そこはライブラリ読みに行った方が良さそう。

あとはググるとmoonbitlang/coreのIssueが出てくることもある。

[Add `.join(String)` for Iter[String] and Iter[Char] · Issue #1171 · moonbitlang/core](https://github.com/moonbitlang/core/issues/1171)
