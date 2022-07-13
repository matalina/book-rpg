"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
class Skill {
    constructor(name, mod, details) {
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
