import React from 'react'
import { Options, Table } from 'simple-react-table'
import { cities } from '../___mock__'
import { City } from '../models'
import { cloudy, pSunny, snowy, sunny } from '../icons'
import { WithIconsCode } from './codeSamples'
import Highlighter from 'react-syntax-highlighter'
import { atelierSeasideLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const wrapToIcon = (value: any): JSX.Element => {
  const icons = {
    'p.sunny': pSunny,
    snowy,
    sunny,
    cloudy
  }
  return <img src={icons[value]} />
}
const addUnit = (value: any): JSX.Element => {
  return <p>{value} km</p>
}
const options: Options<City> = {
  cellOptions: {
    name: { displayName: 'Name' },
    weather: { displayName: 'Weather', wrapper: wrapToIcon },
    temperature: { displayName: 'Celcius' },
    km: { displayName: 'Distance', wrapper: addUnit }
  }
}

export const WithIcons = () => {
  return (
    <>
      <div className='w-100'>
        <h3 className='light'>With icons</h3>
        <p className='dark'>
          Based on some custom logic you can render different data or icons in
          the table. In the example below the model looks like this:
          <pre>
            <code></code>
          </pre>
          <div className='highlight-wrapper'>
            <Highlighter style={atelierSeasideLight} language='javascript'>
              {`
  {
    name: "Vancouver";
    weather: "cloudy";
    temperature: "21";
    km: "3020";
  }
            `}
            </Highlighter>
          </div>
          Based on weather value different icons rendered instead.
        </p>
        <WithIconsCode />
        <Table data={cities} options={options} />
      </div>
    </>
  )
}
