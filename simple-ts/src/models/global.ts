export type Env = 'PROD' | 'DEV';

export interface ObjectOf<Type> {
  [key: string]: Type;
}

export interface AnyObject {
  [key: string]: any;
}