import { reorder } from "./Reorder"

test("should be APhpy24", () => {
    expect(reorder("hA2p4Py")).toBe("APhpy24")
});

test("should be MENTmove11", () => {
    expect(reorder("m11oveMENT")).toBe("MENTmove11")
});

test("should be OCAKEshrt94", () => {
    expect(reorder("s9hOrt4CAKE")).toBe("OCAKEshrt94")
});