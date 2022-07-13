export class DiceRoll {
  sides: number;
  count: number;
  rolls: number[];

  constructor(sides: number, count: number) {
    this.sides = sides;
    this.count = count;
    this.rolls = [];

    return this;
  }

  roll() {
    for(let i = 0; i < this.count; i++) {
      this.rolls.push(Math.floor(Math.random() * this.sides) + 1);
    }
    return this;
  }

  total() {
    return this.rolls.reduce((total, roll) => total +=  roll, 0);
  }
}