import { calculateCombatRatio, slugify } from "../helpers";

export class Npc {
  id: string;
  name: string;
  challengeLevel: number;
  healthPoints: number;
  details: string;

  constructor(name: string, cl: number, hp: number, details: string) {
    this.id = slugify(name);
    this.name = name;
    this.challengeLevel = cl;
    this.healthPoints = hp;
    this.details = details;

    return this;
  }

  takeDamage(opponent: number, roll:number) {
    const ratio = calculateCombatRatio(opponent, this.challengeLevel);
    const damage = ratio + roll;
    if (damage <= 0) return;
    this.healthPoints -= damage;
  }
}