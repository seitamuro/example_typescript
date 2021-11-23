# How to Use jest.fn

`jest.fn()`は呼ばれた回数､呼ばれたときに渡された引数などを記録している｡加えて､これに渡した関数はmockした関数が呼ばれたときに渡される｡
この例を以下に示す｡

```javascript
function greetWorld(greetingFn) {
    return greetingFn("world")
}

test("greetWorld calls the greeting function properly", () => {
    const greetImplementation = name => `Hey, ${name}!`
    const mockFn = jest.fn(greetImplementation)
    const value = greetWorld(mockFn)

    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledWith("world")
    expect(value).toBe("Hey, world!")
})
```