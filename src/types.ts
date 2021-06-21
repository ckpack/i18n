export interface Message {
  [message: string]: any;
}

export interface Messages {
  [locale: string]: Message;
}

export interface Params {
  [template: string]: any;
  [template: number]: any;
}
