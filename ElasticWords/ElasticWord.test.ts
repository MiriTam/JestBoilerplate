import { elasticize } from "./Elasticise"

test("odd length word", () => {
    expect(elasticize("KAYAK")).toBe("KAAYYYAAK")
});

test("even length word", () => {
    expect(elasticize("ANNA")).toBe("ANNNNA")
});

test("word to shot to elastize", () => {
    expect(elasticize("X")).toBe("X")
});