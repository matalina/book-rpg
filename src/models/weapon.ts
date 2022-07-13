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

  damage(mod = 0) {
    const damage = this.#dice.roll(this.count).total() + this.modifier + mod;
    if (damage < 0) return 0;
    return damage;
  }

  getDamageLog() {
    return this.#dice.rollLog.get();
  }
}