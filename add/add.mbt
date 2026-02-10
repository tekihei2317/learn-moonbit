///|
/// 2つの数を足し合わせる
///
/// ```mbt check
/// test {
///   inspect(add(2, 3), content="5")
/// }
/// ```
pub fn add(a : Int, b : Int) -> Int {
  a + b
}
