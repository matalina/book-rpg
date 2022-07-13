"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceRoll = void 0;
class DiceRoll {
    constructor(sides, count) {
        this.sides = sides;
        this.count = count;
        this.rolls = [];
        return this;
    }
    roll() {
        for (let i = 0; i < this.count; i++) {
            this.rolls.push(Math.floor(Math.random() * this.sides) + 1);
        }
        return this;
    }
    total() {
        return this.rolls.reduce((total, roll) => total += roll, 0);
    }
}
exports.DiceRoll = DiceRoll;
