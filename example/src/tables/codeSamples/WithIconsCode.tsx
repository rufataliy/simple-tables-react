import React from 'react'
import Highlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const WithIconsCode = () => {
  return (
    <div className='highlight-wrapper'>
      <Highlighter language='javascript' style={atomOneDark}>
        {`
  import React from 'react'
  import { Options, Table } from 'simple-react-table'
  import { cities } from '../___mock__'
  import { City } from '../models'
  import { cloudy, pSunny, snowy, sunny } from '../icons'
  import { WithIconsCode } from './codeSamples'

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
        <WithIconsCode />
        <Table data={cities} options={options} />
      </>
    )
  }

        `}
      </Highlighter>
    </div>
  )
}
