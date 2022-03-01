import { caesarCipher } from "./CaesarCipher"

test("should be okffng-Qwvb", () => {
    expect(caesarCipher("middle-Outz", 2)).toBe("okffng-Qwvb")
})

test("should be Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj", () => {
    expect(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)).toBe("Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj")
})

test("should be U zlcyhx ch hyyx cm u zlcyhx chxyyx", () => {
    expect(caesarCipher("A friend in need is a friend indeed", 20)).toBe("U zlcyhx ch hyyx cm u zlcyhx chxyyx")
})