"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const helpers_1 = require("../helpers");
class Skill {
    constructor(name, mod, details) {
        this.id = (0, helpers_1.slugify)(name);
        this.name = name;
        this.challengeLevelModifier = mod;
        this.details = details;
        return this;
    }
    use() {
        return this.challengeLevelModifier;
    }
}
exports.Skill = Skill;
;
