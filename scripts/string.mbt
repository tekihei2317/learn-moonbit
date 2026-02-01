///|
test "string comparison" {
  let str1 = "apple"
  let str2 = "banana"
  let result = str1 < str2
  inspect(result, content="true")
  inspect(str1.compare(str2), content="-1")
}

///|
test "string view" {
  let str1 = "Hello, World!"
  let view = str1[:]
  let hello = view[0:5]
  let world = view[7:12]
  inspect(view, content="Hello, World!")
  inspect(hello, content="Hello")
  inspect(world, content="World")
}

///|
test "practical examples" {
  let text = "The quick brown fox"

  // スペースで分割して、Theとfoxを取得する
  let words = text.split(" ").collect()
  inspect(words[0], content="The")
  inspect(words[3], content="fox")

  // 単語を-で連結する。まずはStringViewをStringに戻す。
  let word_strings = words.map(view => view.to_string())
  let mut result = ""
  for i, word in word_strings.iter2() {
    if i == 0 {
      result += word
    } else {
      result += "-\{word}"
    }
  }
  inspect(result, content="The-quick-brown-fox")

  // Iter[String]にはjoinがある
  let result2 = word_strings.join("-")
  inspect(result2, content="The-quick-brown-fox")
}

///|
test "uppercase, lowercase" {
  let text = "The quick brown fox"
  inspect(text.to_upper(), content="THE QUICK BROWN FOX")
  inspect(text.to_lower(), content="the quick brown fox")

  // upper/lowerはviewでも使える StringView -> StringView
  let view = text.view()
  let uppered_view = text.to_upper()
  inspect(uppered_view, content="THE QUICK BROWN FOX")
  inspect(view.to_lower(), content="the quick brown fox")
}
