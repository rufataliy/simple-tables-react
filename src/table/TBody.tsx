import React from 'react'
import { Options, CellOptions, GenericObject } from './models'
import { fetchPropOf } from './utils'

type FillRow = <T>(entry: T, cellOptions: CellOptions<T>) => JSX.Element[]

const fillRow: FillRow = (entry, cellOptions) => {
  const elements: JSX.Element[] = []

  const fetchValueByProp = fetchPropOf(entry)

  for (const prop in cellOptions) {
    const wrapToCustomComponent = cellOptions[prop]?.wrapper
    const element = (
      <td>
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

  console.log(data)

  return (
    <tbody>
      {data.map((entry, index) => (
        <tr
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
