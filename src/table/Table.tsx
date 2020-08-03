import React from 'react'
import { TBody } from './TBody'
import { THead } from './THead'
import { Options, GenericObject } from './models'

interface Props<T> {
  data: T[]
  options: Options<T>
}

const style = `
  .srt-wrapper th {
    position: sticky;
    top: 0;
    background-color: white;
  }
  .srt-wrapper{
    height: 100px;
    overflow-y: auto;
  }
`

export function Table<T extends GenericObject>({
  data,
  options
}: Props<T>): JSX.Element {
  const headers = Object.keys(options.cellOptions).map(
    (option) => options.cellOptions[option]?.displayName ?? ''
  )

  return (
    <div className='srt'>
      <style>{style}</style>
      <div className='srt-wrapper'>
        <table>
          <THead headers={headers} />
          <TBody data={data} options={options} />
        </table>
      </div>
    </div>
  )
}
