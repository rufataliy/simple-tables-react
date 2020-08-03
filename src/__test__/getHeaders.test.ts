import { getHeaders } from "../utils"
import { options_broken, options_proper, headersFromTest } from "../__mocks__"

describe("Should get correct result from getHeaders", () => {
    test("Should get correct headers for proper options", () => {
        const headers = getHeaders(options_proper)
        expect(headers).toEqual(headersFromTest)
    })
    test("Should get empty array for null", () => {
        const headers = getHeaders(null)
        expect(headers).toEqual([])
    })
    test("Should get empty array for broken options", () => {
        const headers = getHeaders(options_broken)
        expect(headers).toEqual([])
    })
})