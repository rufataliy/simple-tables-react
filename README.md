# simple-tables-react

> Lightweight simple react table library that will provide easy api and will keep your component clean.

[![NPM](https://img.shields.io/npm/v/simple-react-table.svg)](https://www.npmjs.com/package/simple-tables-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-tables-react
```

## Basic Usage

```tsx
import React from 'react'
import { Table, Options } from 'simple-react-table'

const options: Options<Employee> = {
  cellOptions: {
    name: { displayName: 'First name' },
    emp_number: { displayName: 'Employee number' },
    position: { displayName: 'Position' },
    years: { displayName: 'Experience' }
  }
}

class Example extends Component {
  [responseData] = useApi<Employee[]>()

  render() {
    return <Table data={responseData} options={options} />
  }
}
```

## Custom cells

You can wrap your data to with wrappers to created custom table cells.

```tsx
import React from 'react'
import { Options, Table } from 'simple-react-table'
import { employees } from '../___mock__'
import { Employee } from '../models'

const wrapToLink = (value: any, entry: Employee) => {
  return <a href={`somelink/${entry.uuid}`}>{value}</a>
}

const options: Options<Employee> = {
  cellOptions: {
    name: { displayName: 'First name', wrapper: wrapToLink },
    height: { displayName: 'Height' },
    age: { displayName: 'Age' }
  }
}

export const WithLink = () => {
  return <Table data={employees} options={options} />
}
```

### Deep nested data structure

You can have array of nested object and access properties with dot notation referencing

```tsx
import React from 'react'
import { Options, Table } from 'simple-react-table'
import { managers } from '../___mock__'
import { Manager } from '../models'

const options: Options<Manager> = {
  cellOptions: {
    name: { displayName: 'First name' },
    'position.name': { displayName: 'Position' },
    'position.team.name': { displayName: 'Type of team' },
    num_exp: { displayName: 'Experience' }
  }
}

export const WithNestedObject = () => {
  return <Table data={managers} options={options} />
}
```

### More examples

[here](https://rufataliy.github.io/simple-tables-react/)

## License

MIT © [rufataliy](https://github.com/rufataliy)

### Keywords

table, react, typescript
