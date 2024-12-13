/* eslint-disable @typescript-eslint/no-explicit-any */
type LocalStorageDataType<T> = T extends object ? T : string;

export const browserStorage = {
  storeData: (key:string, value: any) => {
    if(typeof window !== undefined){
      localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    }
  },
  getData: <T>(key:string):LocalStorageDataType<T> | null => {
    if(typeof window === undefined){
      return null;
    }
    try {
      const value = localStorage.getItem(key);
      return value === null ? null : JSON.parse(value);
    } catch {
      const value = localStorage.getItem(key);
      return value as LocalStorageDataType<T>;
    }
  }
}
