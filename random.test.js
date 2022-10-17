import { getRandomIndexFromArray } from "./random.js";

describe('getRandomIndexFromArray', () => {
    it('returns a valid index', () => { //happy path
        //given
        const input = ['a', 'b', 'c', 'd']
        const expectedLowestIndex = 0
        const expectedHighestIndex = input.length - 1 

        //when
        const actual = getRandomIndexFromArray(input)

        //then
        expect(actual).not.toBeNull()
        expect(actual).toBeGreaterThanOrEqual(expectedLowestIndex)
        expect(actual).toBeLessThanOrEqual(expectedHighestIndex)
    })

    it('returns -1 if array is undefined', () => { //edge cases
        //given
        const input = undefined
        const expected = -1

        //when
        const actual = getRandomIndexFromArray(input)

        //then
        expect(actual).toBe(expected)
    })

    it.todo('handles empty array []')
})