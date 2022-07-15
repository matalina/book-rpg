import { Log } from "./log";

export class Dice {
  #sides = 6;
  rollLog = new Log();
  rolls: number[];

  constructor() {
    this.rolls = [];
  }

  roll(count: number): Dice {
    this.rolls = [];
    for(let i = 0; i < count; i++) {
      this.rolls.push(Math.floor(Math.random() * this.#sides) + 1);
    }

    this.rollLog.add(this.rolls);

    return this;
  }

  wins(): number {
    let count = 0;
    for(let i in this.rolls) {
      const roll = this.rolls[i];
      if(roll > 3) count++;
    }
    return count;
  }

  total(): number {
    return this.rolls.reduce((total, roll) => total += roll, 0);
  }

  losses(): number {
    let count = 0;
    for(let i in this.rolls) {
      const roll = this.rolls[i];
      if(roll < 4) count++;
    }
    return count;
  }

  isEpicWin(): boolean {
    return this.wins() === this.rolls.length;
  }

  isEpicFail(): boolean {
    return this.losses() === this.rolls.length;
  }
}