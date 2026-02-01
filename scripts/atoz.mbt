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

  // 別の方法
  let mut result = ""
  for code in 'a'.to_int().until('z'.to_int() + 1) {
    result += Int::unsafe_to_char(code).to_string()
  }
  inspect(result, content="abcdefghijklmnopqrstuvwxyz")

  // a..zという文字列を得るだけなら
  // Iter[Char]はまだjoinがないそうなので、Iter[String]に変換してからjoinしている
  let result = 'a'
    .to_int()
    .until('z'.to_int() + 1)
    .map(code => Int::unsafe_to_char(code).to_string())
    .join("")
  inspect(result, content="abcdefghijklmnopqrstuvwxyz")
}
