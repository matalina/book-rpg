"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Npc = void 0;
const helpers_1 = require("../helpers");
class Npc {
    constructor(name, cl, hp, details) {
        this.id = (0, helpers_1.slugify)(name);
        this.name = name;
        this.challengeLevel = cl;
        this.healthPoints = hp;
        this.details = details;
        return this;
    }
    takeDamage(opponent, roll) {
        const ratio = (0, helpers_1.calculateCombatRatio)(opponent, this.challengeLevel);
        const damage = ratio + roll;
        if (damage <= 0)
            return;
        this.healthPoints -= damage;
    }
}
exports.Npc = Npc;
