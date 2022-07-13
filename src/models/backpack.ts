import { Item } from "./items";

export class Backpack {
  maxSlots: number;
  storage: Item[];

  constructor(max: number) {
    this.maxSlots = max;
    this.storage = [] as Item[];

    return this;
  }

  put(item: Item): void {
    if(this.storage.length === this.maxSlots) throw Error('NOT_ENOUGH_SPACE');
    this.storage.push(item);
  }

  dump(index: number): void {
    if(index >= this.storage.length) throw Error('NO_ITEM_IN_SLOT');
    if(index < 0) throw Error('NOT_A_VALID_SLOT');
    this.storage.splice(index,1);
  }

  get(index: number): Item {
    if(index >= this.storage.length) throw Error('NO_ITEM_IN_SLOT');
    if(index < 0) throw Error('NOT_A_VALID_SLOT');
    return this.storage[index];
  }

  search(name: string): Item | false {
    for(let i in this.storage) {
      if(this.storage[i].name === name) {
        return this.storage[i];
      }
    }
    return false;
  }
}