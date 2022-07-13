"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, modifier, details) {
        this.name = name;
        this.challengeLevelModifier = modifier;
        this.details = details;
        return this;
    }
    use() {
        return this.challengeLevelModifier;
    }
}
exports.Item = Item;
;
