import { Weapon } from "./weapon";

export class Enemy {
  name: string;
  details: string;
  challengeLevel: number;
  hitPoints: number;
  weapon: Weapon;

  constructor(name: string, details: string, cl: number, hp: number, weapon: Weapon) {
    this.name = name;
    this.details = details;
    this.challengeLevel = cl;
    this.hitPoints = hp;
    this.weapon = weapon;
  }

  takeDamage(damage: number) {
    if(damage > 0)
      this.hitPoints += damage;
    return this;  
  }
}