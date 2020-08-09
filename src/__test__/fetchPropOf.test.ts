import { fetchPropOf } from '../utils'

const mockObject = {
  location: {
    city: 'Vancouver'
  },
  price: '23000'
}
describe('Should get correct result from fetchPropOf', () => {
  test('Should get correct value for provided prop', () => {
    const value = fetchPropOf(mockObject)('location.city')
    expect(value).toBe(mockObject.location.city)
  })
  test('Should get undefined for wrong prop', () => {
    const value = fetchPropOf(mockObject)('address.city')
    expect(value).toBe(undefined)
  })
  test('Should get undefined for null', () => {
    const value = fetchPropOf(null)('address.city')
    expect(value).toBe(undefined)
  })
  test('Should get undefined when args nnot provided ', () => {
    const value = fetchPropOf()()
    expect(value).toBe(undefined)
  })
})
