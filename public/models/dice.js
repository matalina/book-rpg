"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Dice_sides;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
const log_1 = require("./log");
class Dice {
    constructor() {
        _Dice_sides.set(this, 6);
        this.rollLog = new log_1.Log();
        this.rolls = [];
    }
    roll(count) {
        this.rolls = [];
        for (let i = 0; i < count; i++) {
            this.rolls.push(Math.floor(Math.random() * __classPrivateFieldGet(this, _Dice_sides, "f")) + 1);
        }
        this.rollLog.add(this.rolls);
        return this;
    }
    wins() {
        let count = 0;
        for (let i in this.rolls) {
            const roll = this.rolls[i];
            if (roll >= 3)
                count++;
        }
        return count;
    }
    total() {
        return this.rolls.reduce((total, roll) => total += roll, 0);
    }
}
exports.Dice = Dice;
_Dice_sides = new WeakMap();
