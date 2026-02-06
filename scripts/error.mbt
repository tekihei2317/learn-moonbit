///|
fn slice_string(str : String, start : Int, end : Int) -> StringView raise Error {
  let view = str[:][start:end]
  return view
}

///|
fn main {
  let str = "hello world"
  let sliced = try? slice_string(str, 2, 5)
  println(sliced)
}
