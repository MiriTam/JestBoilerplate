import { splitOnDoubleLetter } from "./WordSplitter";

test("should be Let ter", () => {
    expect(splitOnDoubleLetter("Letter")).toStrictEqual(["Let", "ter"]);
});

test("should be real ly", () => {
    expect(splitOnDoubleLetter("Really")).toStrictEqual(["Real", "ly"]);
});

test("should be hap py", () => {
    expect(splitOnDoubleLetter("happy")).toStrictEqual(["hap", "py"]);
});

test("should be shal l", () => {
    expect(splitOnDoubleLetter("shall")).toStrictEqual(["shal", "l"]);
});

test("should be to ol", () => {
    expect(splitOnDoubleLetter("tool")).toStrictEqual(["to", "ol"]);
});

test("should be mississippi", () => {
    expect(splitOnDoubleLetter("mississippi")).toStrictEqual(["mis", "sis", "sip", "pi"]);
});
 
test("should be empty", () => {
    expect(splitOnDoubleLetter("easy")).toStrictEqual([]);
});