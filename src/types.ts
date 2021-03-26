export interface Messages {
  [locale: string]: {
    [message: string]: any;
  };
}

export interface Params {
  [template: string]: any;
  [template: number]: any;
}
