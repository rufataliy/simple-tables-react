import _ from 'lodash'

type FetchPropOf = (entry: { [key: string]: any }) => (prop: string) => any

function getPropOf(
  object: { [key: string]: any },
  keys: string | string[],
  defaultVal?: string
): any {
  if (!Boolean(keys)) return undefined
  keys = Array.isArray(keys) ? keys : keys.split('.')
  object = object[keys[0]]
  if (object && keys.length > 1) {
    return getPropOf(object, keys.slice(1))
  }
  return object === undefined ? defaultVal : object
}

export const fetchPropOf: FetchPropOf = function fetchPropOf(entry) {
  return function fetchValueByProp(prop): any {
    return getPropOf({ ...entry }, prop, undefined)
  }
}
