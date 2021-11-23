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