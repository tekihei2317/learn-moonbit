///|
struct Point {
  x : Int
  mut y : Int
} derive(Show)

///|
test {
  // arrは変わる
  let arr = [3, 1, 4, 1]
  let arr2 = arr
  arr.push(5)
  inspect(
    arr,
    content=(
      #|[3, 1, 4, 1, 5]
    ),
  )
  inspect(
    arr2,
    content=(
      #|[3, 1, 4, 1, 5]
    ),
  )

  // arrは変わらない
  let arr3 = arr.copy()
  arr3.sort()
  inspect(
    arr3,
    content=(
      #|[1, 1, 3, 4, 5]
    ),
  )
  inspect(
    arr,
    content=(
      #|[3, 1, 4, 1, 5]
    ),
  )

  // 構造体の中身は複製できない
  let arr : Array[Point] = [{ x: 2, y: 3 }]
  let arr2 = arr.copy()
  arr[0].y = 10
  inspect(
    arr,
    content=(
      #|[{x: 2, y: 10}]
    ),
  )
  inspect(
    arr2,
    content=(
      #|[{x: 2, y: 10}]
    ),
  )
}
