import { Dice } from "./dice";

export class Character {
  name: string;
  challengeLevel: number;
  hitPoints: number;

  #dice = new Dice();

  constructor(name: string, cl: number, hp: number) {
    this.name = name;
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