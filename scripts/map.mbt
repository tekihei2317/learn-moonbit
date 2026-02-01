///|
type Graph = @hashmap.HashMap[String, Array[String]]

///|
type Graph2 = Map[String, Array[String]]

///|
test "use hashmap" {
  let graph : Graph = @hashmap.new()

  // "a" -> ["b", "c", "d"]
  let from = "a"
  for to in ["b", "c", "d"] {
    match graph.get(from) {
      None => graph.set(from, [to])
      Some(edges) => edges.push(to)
    }
  }
  inspect(
    graph.get("a"),
    content=(
      #|Some(["b", "c", "d"])
    ),
  )
  inspect(
    graph,
    content=(
      #|HashMap::from_array([("a", ["b", "c", "d"])])
    ),
  )
}

///|
test "use map" {
  let graph : Graph2 = {}
  let from = "a"
  for to in ["b", "c", "d"] {
    match graph.get(from) {
      None => graph.set(from, [to])
      Some(edges) => edges.push(to)
    }
  }
  inspect(
    graph,
    content=(
      #|{"a": ["b", "c", "d"]}
    ),
  )
  inspect(
    graph["a"],
    content=(
      #|["b", "c", "d"]
    ),
  )
  inspect(
    graph.get("a"),
    content=(
      #|Some(["b", "c", "d"])
    ),
  )
}
