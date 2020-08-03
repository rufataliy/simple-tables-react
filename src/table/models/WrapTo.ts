import { ReactElement } from 'react'

export type WrapTo<T> = ({ ...args }: T) => ReactElement<any, any>
