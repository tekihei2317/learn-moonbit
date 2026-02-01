# MoonBitでAtCoderを解く方法

このドキュメントは、MoonBitでAtCoderを解くための最小構成と注意点をCodexにまとめてもらったものです。

まだAtCoderへの提出はできておらず、未完成のため、後から作業再開するために記録してもらいました。

とりあえず標準入力から`a b`を受け取って、`a + b`を計算して標準出力に出すプログラムをMoonbitで書いて、Node.jsで実行するとこまでできました。

Wasmにコンパイルするか、JSにコンパイルするかの選択肢があります。Wasmの場合は標準入出力周りがどうなるか分からなかったので、一旦JSで試しました。

`println`は`console.log`に変換されるので動きますが、標準出力はexternでNode.jsのfs.readFileSyncを使っています。色々改善点アリです。

↓以下はCodexのまとめ

## 結論

- 現時点で現実的なのは **JavaScript (Node.js) 提出** です。
- **WebAssembly提出は未検証で難易度が高い**（WASI対応・ランタイム機能対応の検証が必要）。

## JS(Node.js) で解く方法（推奨）

### 1. 最小構成のプロジェクト

以下の構成だけあればOKです。

```
atcoder_js/
  moon.mod.json
  main/
    moon.pkg.json
    main.mbt
```

`main/moon.pkg.json`

```
{
  "is-main": true,
  "import": []
}
```

### 2. `main.mbt`

標準入力はNode.jsのstdinを `extern "js"` で読む必要があります。
標準入出力以外はMoonBitで書く、という前提で最小の `a + b` を示します。

```
///|
fn main {
  let input = read_stdin()
  let nums = parse_numbers(input)
  let answer = match nums {
    [a, b] => a + b
    _ => 0
  }
  println(answer)
}

///|
extern "js" fn parse_numbers(input : String) -> Array[Int] =
  #| function() {
  #|   if (input.length === 0) return [];
  #|   return input.trim().split(/\s+/).map(Number);
  #| }

///|
extern "js" fn read_stdin() -> String =
  #| function() {
  #|   const fs = require("fs");
  #|   return fs.readFileSync(0, "utf8");
  #| }
```

### 3. ビルドと実行

`extern "js"` を使うので、**必ずJSターゲットでビルド**します。

```
cd atcoder_js
moon build --target js main
printf "3 4" | node target/js/release/build/main/main.js
```

出力が `7` ならOKです。

### 4. AtCoderに提出するファイル

`target/js/release/build/main/main.js` を `Main.js` にして提出します。

## WebAssemblyでの提出について

### できる可能性はあるが未検証

- MoonBitのWasm出力はpost-MVP機能（bulk-memory / multi-value / reference-types）を使う前提。
- AtCoderの実行環境は iwasm (WAMR) なので、対応状況の検証が必要。
- MoonBitの `println` は `spectest.print_char` 依存で、AtCoder環境では使えない可能性が高い。

### WASIライブラリを使う場合

`peter-jerry-ye/wasi` などWASI Preview 1のstdin/stdoutを使うライブラリがある。
理論上はWASIの `fd_read` / `fd_write` を使ってI/Oできるが、
AtCoderのiwasmがWASIを有効にしているか、
MoonBitのWasmがiwasmで動くかの検証が必要。

## まとめ

- **今すぐ解くならJS(Node.js)提出が安定**。
- **stdinだけ `extern "js"` にして、他はMoonBitで書く**のが最小構成。
- WasmはWASI対応やiwasm互換性の検証が必要で、現状は難度が高い。
