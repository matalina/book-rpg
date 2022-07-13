"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backpack = void 0;
class Backpack {
    constructor(max) {
        this.maxSlots = max;
        this.storage = [];
        return this;
    }
    put(item) {
        if (this.storage.length === this.maxSlots)
            throw Error('NOT_ENOUGH_SPACE');
        this.storage.push(item);
    }
    dump(index) {
        if (index >= this.storage.length)
            throw Error('NO_ITEM_IN_SLOT');
        if (index < 0)
            throw Error('NOT_A_VALID_SLOT');
        this.storage.splice(index, 1);
    }
    get(index) {
        if (index >= this.storage.length)
            throw Error('NO_ITEM_IN_SLOT');
        if (index < 0)
            throw Error('NOT_A_VALID_SLOT');
        return this.storage[index];
    }
    search(name) {
        for (let i in this.storage) {
            if (this.storage[i].name === name) {
                return this.storage[i];
            }
        }
        return false;
    }
}
exports.Backpack = Backpack;
