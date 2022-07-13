import { Character } from "./models/character";
import { Dice } from "./models/dice";

export const CL_BASE = 3;
export const HP_BASE = 10;

export function createCharacter(name: string) {
  const dice = new Dice();

  const cl = dice.roll(1).total() + CL_BASE;
  const hp = dice.roll(2).total() + HP_BASE;

  const character = new Character(name, cl, hp);
  console.log(dice.rollLog.get());

  return character;
}