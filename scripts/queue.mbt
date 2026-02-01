///|
test "queue example" {
  let queue = @queue.new()
  for i in 0..<5 {
    queue.push(i)
  }
  let arr = []
  while !queue.is_empty() {
    let value = queue.unsafe_pop()
    arr.push(value)
  }
  inspect(arr, content="[0, 1, 2, 3, 4]")
}

///|
test "queue example 2" {
  let queue = @queue.new()
  for i in 0..<5 {
    queue.push(i)
  }
  let arr = []
  while queue.pop() is Some(value) {
    arr.push(value)
  }
  inspect(arr, content="[0, 1, 2, 3, 4]")
}
