import { shuffleCount } from "./Shuffle"

test("should be 3", () => {
    expect(shuffleCount(8)).toBe(3)
})

test("should be 12", () => {
    expect(shuffleCount(14)).toBe(12)
}) 

test("should be 8", () => {
    expect(shuffleCount(52)).toBe(8)
})