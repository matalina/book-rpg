import { Dice } from "./dice";
import { Item } from "./item";

export class Weapon extends Item {
  count: number;
  modifier: number

  #dice = new Dice();

  constructor(name: string, details: string, count = 1, modifier = 0) {
    super(name, details);
    this.count = count;
    this.modifier = modifier;
  }

  damage(over = 0) {
    const hit = this.#dice.roll(this.count).total() + this.modifier + over;
  }

  getDamageLog() {
    return this.#dice.rollLog.get();
  }
}