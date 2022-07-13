import { Character } from "./character";
import { Weapon } from "./weapon";

export class Enemy extends Character {
  challengeLevel: number;
  hitPoints: number;
  weapon: Weapon;

  constructor(name: string, details: string, cl: number, hp: number, weapon: Weapon) {
    super(name, details);
    this.challengeLevel = cl;
    this.hitPoints = hp;
    this.weapon = weapon;
  }

  takeDamage(damage: number): Enemy {
    if(damage > 0)
      this.hitPoints -= damage;
    return this;  
  }

  damage(losses: number): number {
    return this.weapon.damage(losses);
  }
}