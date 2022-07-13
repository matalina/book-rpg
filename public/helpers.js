"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacter = exports.HP_BASE = exports.CL_BASE = void 0;
const character_1 = require("./models/character");
const dice_1 = require("./models/dice");
exports.CL_BASE = 3;
exports.HP_BASE = 10;
function createCharacter(name) {
    const dice = new dice_1.Dice();
    const cl = dice.roll(1).total() + exports.CL_BASE;
    const hp = dice.roll(2).total() + exports.HP_BASE;
    const character = new character_1.Character(name, cl, hp);
    console.log(dice.rollLog.get());
    return character;
}
exports.createCharacter = createCharacter;
