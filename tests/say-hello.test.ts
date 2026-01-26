import { sayHello } from "../src/say-hello";

describe("sayHello",  () => {
    it("should return hello hanif", ()=> {
        const name = "hanif";
        expect(sayHello(name)).toBe("Hello hanif");
    });
})