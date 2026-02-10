# add

```mbt check
test {
  inspect(add(2, 3), content="5")
  assert_eq(add(10, 20), 30)
}
```
