import { add } from "./util";

describe('add', () => {
    it('return summiert beide werte', () => {
        //given
        const inputA = 5
        const inputB = 9
        const expected = 14

        //when
        const actual = add(inputA, inputB)

        //then
        expect(actual).toBe(expected)
    })

    it('returnt keinen string', () => {
        //given
        const inputA = 5
        const inputB = 9
        const expected = "string"

        //when
        const actual = add(inputA, inputB)

        //then
        expect(typeof actual).not.toBe(expected)
    })

    it('wirft fehler wenn der erste input undefined ist', () => {
        //given
        const inputA = undefined
        const inputB = 9
        const expectedErrorMessage = 'a undefined'

        //when
        const call = () => add(inputA, inputB)

        //then
        expect(call).toThrow(expectedErrorMessage)
    })


    it('wirft fehler wenn der zweite input undefined ist', () => {
        //given
        const inputA = 5
        const inputB = undefined
        const expectedErrorMessage = 'b undefined'

        //when
        const call = () => add(inputA, inputB)

        //then
        expect(call).toThrow(expectedErrorMessage)
    })

    it('wirft fehler wenn beide inputs undefined sind', () => {
        //given
        const inputA = undefined
        const inputB = undefined
        const expectedErrorMessage = 'beide undefined'

        //when
        const call = () => add(inputA, inputB)

        //then
        expect(call).toThrow(expectedErrorMessage)
    })

    it.todo('nimmt default wert 0, der erste input muss eine zahl sein')
    it.todo('nimmt default wert 0, der zweite input muss eine zahl sein')
})