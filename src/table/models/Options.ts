import { Cell } from "./Cell";

export interface Options<T> {
  cellOptions: { [key: string]: Cell<T> };
  rowOptions?: {
    onClick: (row: T) => void;
  };
}
