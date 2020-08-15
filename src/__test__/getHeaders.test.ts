import { getHeaders } from '../utils'
import { options_broken, options_proper, headersFromTest } from '../__mocks__'

const ERR_MSG = `Please provide options object with cellOptions configuration. For more info see examples in https://rufataliy.github.io/simple-tables-react/. Using typescript could be handy not to miss the required props.`

describe('Should get correct result from getHeaders', () => {
  test('Should get correct headers for proper options', () => {
    const headers = getHeaders(options_proper)
    expect(headers).toEqual(headersFromTest)
  })
  test('Should get empty array for null', () => {
    expect(() => getHeaders(null)).toThrow(ERR_MSG)
  })
  test('Should get empty array for broken options', () => {
    expect(() => getHeaders(options_broken)).toThrow(ERR_MSG)
  })
})
