import { Options } from "../models"

type GetHeaders = (options: Options<any>) => string[]


export const getHeaders: GetHeaders = (options) => {
    if (!options || !options.cellOptions) return []
    const headers = Object.keys(options.cellOptions).map(
        (option) => options.cellOptions[option]?.displayName ?? ''
    )
    return headers
}