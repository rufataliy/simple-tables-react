# simple-react-table

> Lightweight simple react table library that will provide easy api and will keep your component clean.

[![NPM](https://img.shields.io/npm/v/simple-react-table.svg)](https://www.npmjs.com/package/simple-react-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-table
```

## Usage

```tsx
import React from 'react'
import {Table, Options} from "simple-react-table"

const options: Options<Employee>={
  cellOptions:{
    name: { dislpayName: "First name" },
    emp_number: { displayName: "Employee number" },
    position: { displayName: "Position" },
    years: { displayName: "Experience" }
  }
}

class Example extends Component {
  const [responseData] = useApi<Employee[]>()

  render() {
    return <Table data={responseData} options={options} />
  }
}
```

## License

MIT © [rufataliy](https://github.com/rufataliy)
