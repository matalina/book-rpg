import type { Item } from "./item";

export class Container {
  name: string;
  maxSlots: number;
  storage: Item[];

  constructor(name: string, max: number) {
    this.name = name;
    this.maxSlots = max;

    this.storage = [] as Item[];
  }

  get() {

  }

  put(item: Item): Container | false {
    if(this.storage.length === this.maxSlots) return false;

    this.storage.push(item);
    return this;
  }

  drop() {

  }
}