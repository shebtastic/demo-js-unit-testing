import { greeting } from "./greeting";

describe("greeting function", () => {
    it("returns something something", () => {
        //given
        const name = "Jessica"
        const expected = "hello Jessica!"

        //when
        const actual = greeting(name)

        //then
        expect(actual).toBe(expected)
    })
})