import { Options } from "../models"

type GetHeaders = (options: Options<any>) => string[]


export const getHeaders: GetHeaders = (options) => {
    if (!options || !options.cellOptions) {
        throw Error(`Please provide options object with cellOptions configuration. 
                    For more info see examples in https://github.com/rufataliy/simple-react-table.
                    Using typescript could be handy to not miss required props.`)
    }
    const headers = Object.keys(options.cellOptions).map(
        (option) => options.cellOptions[option]?.displayName ?? ''
    )
    return headers
}