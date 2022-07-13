"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const character = (0, helpers_1.createCharacter)('Jack Sparrow');
console.log(character);
console.log(character.roll());
console.log(character.roll());
console.log(character.getDiceLogs());
