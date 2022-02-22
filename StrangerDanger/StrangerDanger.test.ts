import { noStranger } from "./StrangerDanger"

test("should be aquaintences", () => {
    expect(noStranger("See Spot run. See Spot jump. Spot likes jumping. See Spot fly."))
    .toStrictEqual([["spot", "see"], []])
})

test("should be friends", () => {
    expect(noStranger("cookie cookie cookie cookie cookie cake smalahove"))
    .toStrictEqual([[], ["cookie"]])
})