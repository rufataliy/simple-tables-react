import React from 'react'
import { Options, Table } from "simple-react-table"
import { employees } from "./___mock__"
import { Employee } from "./models"

const wrapToLink = (value: any, entry: Employee) => {
    return (
        <a href={`somelink/${entry}`}>
            {value}
        </a>
    )
}

const options: Options<Employee> = {
    cellOptions: {
        name: { displayName: "First name", wrapper: wrapToLink },
        height: { displayName: "Height" },
        age: { displayName: "Age" }
    }
}

export const WithLink = () => {
    return (
        <Table data={employees} options={options} />
    )
}