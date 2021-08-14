import { getArray, pushItems } from './LocalStorageUtils'

it("gets an empty array if item doesn't exist in local storage", () => expect(getArray("key")).toEqual([]))

it("creates an array when pushing items to local storage", () => {
  pushItems("test", 1)
  expect(getArray("test")).toEqual([1])
  pushItems("test", 2, 3)
  expect(getArray("test")).toEqual([1, 2, 3])
})
