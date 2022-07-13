import { Character } from "./models/character";
import { DiceRoll } from './models/dice';
import { Skill } from "./models/skill";

const skills = [] as Skill[];
const you = new Character(
  'Jack Sparrow', 
  new DiceRoll(10,1).roll().total(),
  new DiceRoll(10,1).roll().total(),
  skills, 
  new DiceRoll(10,2).roll().total(),
);

console.log(you);