type StoreSchema = { [key: string]: any };

interface Store {
  get(key: string): any;
  set(key: string, cont: any): void;
}

export type {
  Store,
  StoreSchema
};
