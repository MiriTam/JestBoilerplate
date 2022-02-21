import { rearrange } from "./Rearrange"

test("should be This is a test", () => {
    expect(rearrange("is2 Thi1s T4est 3a")).toBe("This is a Test")
})

test("should be For the good of the people", () => {
    expect(rearrange("4of Fo1r pe6ople g3ood th5e the2")).toBe("For the good of the people")
})

test("should be JavaScript is so damn wierd", () => {
    expect(rearrange("5weird i2s JavaScri1pt dam4n so3")).toBe("JavaScript is so damn weird")
})

test("should be empty", () => {
    expect(rearrange(" ")).toBe("")
})