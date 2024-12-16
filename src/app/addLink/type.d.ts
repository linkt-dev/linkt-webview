export type FormValueType<T> = {
  [key in keyof T]: {
    value: string | number | boolean;
  };
};
