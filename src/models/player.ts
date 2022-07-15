import { Character } from "./character";
import { Dice } from "./dice";
import type { Skill } from "./skill";
import type { Weapon } from "./weapon";
import type { WeaponSkill } from "./weapon-skill";

export class Player extends Character {
  challengeLevel: number;
  hitPoints: number;
  skills: Skill[];

  dice = new Dice();

  constructor(name: string, details: string, cl: number, hp: number, skills: Skill[]) {
    super(name, details);
    this.challengeLevel = cl;
    this.hitPoints = hp;
    this.skills = skills;
  }

  takeDamage(damage: number): Player {
    this.hitPoints -= damage;
    return this;
  }

  roll(modifier: number): Player {
    this.dice.roll(this.challengeLevel + modifier).wins();
    return this;
  }

  hasSkill(name: string): boolean {
    for(const i in this.skills) {
      let skill = this.skills[i];
      if(skill.name === name) {
        return true;
      }
    }
    return false;
  }

  hasWeaponSkill(weapon: Weapon): boolean {
    for(const i in this.skills) {
      let skill = this.skills[i] as unknown as WeaponSkill;
      if(skill.type === weapon.type) {
        return true;
      }
    }
    return false;
  }

  challenge(diceCount: number, toBeat: number) {
    this.roll(diceCount);
    return this.dice.wins() >= toBeat;
  }

}