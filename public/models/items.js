"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const helpers_1 = require("../helpers");
class Item {
    constructor(name, modifier, details) {
        this.id = (0, helpers_1.slugify)(name);
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
