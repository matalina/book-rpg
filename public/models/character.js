"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Character_dice;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const dice_1 = require("./dice");
class Character {
    constructor(name, cl, hp) {
        _Character_dice.set(this, new dice_1.Dice());
        this.name = name;
        this.challengeLevel = cl;
        this.hitPoints = hp;
    }
    roll(mod = 0) {
        return __classPrivateFieldGet(this, _Character_dice, "f").roll(this.challengeLevel + mod).wins();
    }
    getDiceLogs() {
        return __classPrivateFieldGet(this, _Character_dice, "f").rollLog.get();
    }
}
exports.Character = Character;
_Character_dice = new WeakMap();
