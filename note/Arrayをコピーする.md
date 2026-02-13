# Arrayをコピーする

```mbt
///|
test {
  let arr = [3, 1, 4, 1, 5]
  let arr2 = arr
  arr.push(1)
  inspect(
    arr,
    content=(
      #|[3, 1, 4, 1, 5, 1]
    ),
  )
  inspect(
    arr2,
    content=(
      #|[3, 1, 4, 1, 5, 1]
    ),
  )

  let arr3 = arr.copy()
  arr3.sort()
  inspect(
    arr,
    content=(
      #|[3, 1, 4, 1, 5, 1]
    ),
  )
  inspect(
    arr3,
    content=(
      #|[1, 1, 1, 3, 4, 5]
    ),
  )
}

```
