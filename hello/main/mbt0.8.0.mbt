///|
test "constructor as function" {
  let _ = (x : Int) => Some(x)
  let some_number = 42 |> Some
  assert_eq(some_number, Some(42))
}

///|
/// ```mbt check
/// test {
///   // 実行される
///   assert_eq(1 + 2, 3)
/// }
/// ```
///
/// ```mbt nocheck
/// test {
///   // 実行されない
///   // mbt → mbt nockeckにmoon fmtで修正される
///   assert_eq(1 + 2, 4)
/// }
/// ```
test "for ... nobreak ..." {
  // for ... else has been changed to for ... nobreak
  fn f(limit : Int) -> Int {
    for i = 0; i < 10; i = i + 1 {
      if i == limit {
        return i
      }
    } nobreak {
      i
    }
  }
  assert_eq(f(5), 5)
  assert_eq(f(100), 10)
}
