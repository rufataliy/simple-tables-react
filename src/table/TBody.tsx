import React from 'react'
import { Options, CellOptions, GenericObject } from './models'
import { fetchPropOf, applyTestid } from '../utils'

type FillRow = <T>(entry: T, cellOptions: CellOptions<T>) => JSX.Element[]

const fillRow: FillRow = (entry, cellOptions) => {
  const elements: JSX.Element[] = []

  const fetchValueByProp = fetchPropOf(entry)

  for (const prop in cellOptions) {
    const wrapToCustomComponent = cellOptions[prop]?.wrapper
    const element = (
      <td key={prop}>
        {wrapToCustomComponent
          ? wrapToCustomComponent(fetchValueByProp(prop), entry)
          : fetchValueByProp(prop)}
      </td>
    )

    elements.push(element)
  }

  return elements
}

interface Props<T> {
  data: T[]
  options: Options<T>
}

export function TBody<T extends GenericObject>({
  data,
  options
}: Props<T>): JSX.Element {
  const { rowOptions, cellOptions } = options
  if (!Array.isArray(data)) {
    console.warn(`The type of data prop should be array of objects, but the provided data is type of ${typeof data}: ${data}`)
  }
  return (
    <tbody>
      {Array.isArray(data) && data.map((entry, index) => (
        <tr
          {...applyTestid(process.env.NODE_ENV, "row")}
          onClick={(): void => {
            rowOptions?.onClick(entry)
          }}
          key={index}
        >
          {fillRow<T>(entry, cellOptions)}
        </tr>
      ))}
    </tbody>
  )
}
