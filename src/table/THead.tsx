import React from 'react'
import styled from 'styled-components'

const Th = styled.th`
  position: sticky;
  top: 0;
  background-color: white;
`

export const THead: React.FC<{ headers: string[] }> = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <Th key={index}>{header}</Th>
        ))}
      </tr>
    </thead>
  )
}
