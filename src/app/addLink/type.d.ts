export interface ILinkForm {
    title: string;
    url: string;
    category: string;
  }
  
 export  type FormValueType<T> = {
    [key in keyof T]: {
      value: string | number | boolean;
    };
  };