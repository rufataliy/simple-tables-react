# simple-tables-react

> Lightweight simple react table library that will provide easy api and will keep your component clean.

[![NPM](https://img.shields.io/npm/v/simple-tables-react.svg)](https://www.npmjs.com/package/simple-tables-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

You can wrap your data with wrappers to create custom table cells.

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

You can have an array of nested objects and access properties with dot notation referencing

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

### Styling

This component will do minimum for styling giving the user flexibility to style.
Current styles in the package are:

```css
.srt-wrapper th {
  position: sticky;
  top: 0;
  background-color: white;
}

.srt-wrapper {
  overflow-y: auto;
}
```

> Note that sticky header might not work in some browser liek IE.

You can override styles by adding `.srt` selector before the current selector. For example:

```css
.srt .srt-wrapper th {
  background-color: lightsalmon;
}
```

Another option can be creating tour custom wrapper with your styles.

### More examples

[here](https://rufataliy.github.io/simple-tables-react/)

## License

MIT © [rufataliy](https://github.com/rufataliy)

### Keywords

table, react, typescript
