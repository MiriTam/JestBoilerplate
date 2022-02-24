import { countBoomerangs } from "./CountBoomerangs"

test("should be 2", () => {
    expect(countBoomerangs([9, 5, 9, 5, 1, 1, 1])).toBe(2)
})

test("should be 1", () => {
    expect(countBoomerangs([5, 6, 6, 7, 6, 3, 9])).toBe(1)
})

test("should be 0", () => {
    expect(countBoomerangs([4, 4, 4, 9, 9, 9, 9])).toBe(0)
})

test("should be 5", () => {
    expect(countBoomerangs([1, 7, 1, 7, 1, 7, 1])).toBe(5)
})
