import { Character } from "./character";
import { Dice } from "./dice";

export class Player extends Character {
  challengeLevel: number;
  hitPoints: number;

  #dice = new Dice();

  constructor(name: string, details: string, cl: number, hp: number) {
    super(name, details);
    this.challengeLevel = cl;
    this.hitPoints = hp;
  }

  roll(mod = 0) {
    return this.#dice.roll(this.challengeLevel + mod).wins();
  }

  getDiceLogs() {
    return this.#dice.rollLog.get();
  }
}