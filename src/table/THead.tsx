import React from 'react'
import { applyTestid } from '../../utils'

export const THead: React.FC<{ headers: string[] }> = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th {...applyTestid(process.env.NODE_ENV, "header")} key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  )
}
