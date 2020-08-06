import _ from 'lodash'

type FetchPropOf = (entry: { [key: string]: any }) => (prop: string) => any

export const fetchPropOf: FetchPropOf = function fetchPropOf(entry) {
  return function fetchValueByProp(prop): any {
    return _.get({ ...entry }, prop, undefined)
  }
}
