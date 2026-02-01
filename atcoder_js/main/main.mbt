///|
fn main {
  let input = read_stdin()
  let nums = input
    .split(" ")
    .map(str => @strconv.parse_int(str) catch { _ => 0 })
    .collect()
  let answer = match nums {
    [a, b] => a + b
    _ => 0
  }
  println(answer)
}

///|

///|
extern "js" fn read_stdin() -> String =
  #| function() {
  #|   const fs = require("fs");
  #|   return fs.readFileSync(0, "utf8");
  #| }
