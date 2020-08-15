import { Options } from '../table'

type GetHeaders = (options: Options<any>) => string[]

export const getHeaders: GetHeaders = (options) => {
  if (!options || !options.cellOptions) {
    throw Error(`Please provide options object with cellOptions configuration. 
                    For more info see examples in https://rufataliy.github.io/simple-tables-react/.
                    Using typescript could be handy not to miss the required props.`)
  }

  const headers = Object.keys(options.cellOptions).map(
    function mapCellOptionsProps(option) {
      if (
        typeof options.cellOptions[option] !== 'object' ||
        !options.cellOptions[option].hasOwnProperty('displayName')
      ) {
        console.warn(
          `Provided key "${option}" of cellOptions should have a value of object with displayName prop.`
        )
      }
      return options.cellOptions[option]?.displayName ?? ''
    }
  )
  return headers
}
