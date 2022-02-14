import { maximumProfit } from "./MaxProfit";

test("profit should be 14", () => {
    expect(maximumProfit([8, 5, 12, 9, 19, 1])).toBe(14);
});

test("profit should be 7", () => {
    expect(maximumProfit([2, 4, 9, 3, 8])).toBe(7);
});

test("profit should be 0", () => {
    expect(maximumProfit([21, 12, 11, 9, 6, 3])).toBe(0);
});