import { replaceVowel } from "./VowelReplacement"

test("should be k1r1ch3", () => {
    expect(replaceVowel("karAchi")).toBe("k1r1ch3")
})

test("should be ch2mb5r", () => {
    expect(replaceVowel("chEmBur")).toBe("ch2mb5r")
})

test("should be kh1ndb1r3", () => {
    expect(replaceVowel("khandbari")).toBe("kh1ndb1r3")
})

test("should be l2x3c1l", () => {
    expect(replaceVowel("LexiCAl")).toBe("l2x3c1l")
})

test("should be f5nct34ns", () => {
    expect(replaceVowel("fuNctionS")).toBe("f5nct34ns")
})

test("should be 21sy", () => {
    expect(replaceVowel("EASY")).toBe("21sy")
})