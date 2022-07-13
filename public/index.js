"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("./models/character");
const dice_1 = require("./models/dice");
const skills = [];
const you = new character_1.Character('Jack Sparrow', new dice_1.DiceRoll(10, 1).roll().total(), new dice_1.DiceRoll(10, 1).roll().total(), skills, new dice_1.DiceRoll(10, 2).roll().total());
console.log(you);
