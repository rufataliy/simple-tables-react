import { Options } from "../models"

type GetHeaders = (options: Options<any>) => string[]

export const getHeaders: GetHeaders = (options) => {
    if (!options || !options.cellOptions) {
        throw Error(`Please provide options object with cellOptions configuration. 
                    For more info see examples in https://github.com/rufataliy/simple-react-table.
                    Using typescript could be handy to not miss required props.`)
    }

    const headers = Object.keys(options.cellOptions).map(
        function mapCellOptionsProps(option) {
            if (typeof options.cellOptions[option] !== "object" || !options.cellOptions[option].hasOwnProperty("displayName")) {
                console.warn(`Provided key "${option}" of cellOptions should have a value of object with displayName prop.`)
            }
            return options.cellOptions[option]?.displayName ?? ''
        }
    )
    return headers
}