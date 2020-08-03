export type Cell<T> = {
  displayName: string;
  wrapper?: (value: string | number | undefined, entry: T) => JSX.Element;
};
