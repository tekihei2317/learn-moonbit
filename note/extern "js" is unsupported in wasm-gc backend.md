# extern "js" is unsupported in wasm-gc backend

[关于：extern "js" is unsupported in wasm-gc backend.moonE4156 - 欢迎 - moonbitlang](https://taolun.moonbitlang.com/t/topic/1350/4)

`_build/js/package.json`で`"backend": "js"`になっていればOKとのこと。

`moon.pkg.json`に`"preferred-target": "js"`を指定して、`moon run build`すれば解決するだろうか。ダメだったら`_build`ディレクトリ削除してやり直す。
