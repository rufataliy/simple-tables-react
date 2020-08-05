import React from 'react'
import { TBody } from './TBody'
import { THead } from './THead'
import { Options, GenericObject } from '../models'
import { getHeaders } from '../../utils'

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

  return (
    <div className='srt'>
      <style>{style}</style>
      <div className='srt-wrapper'>
        <table>
          <THead headers={getHeaders(options)} />
          <TBody data={data} options={options} />
        </table>
      </div>
    </div>
  )
}
