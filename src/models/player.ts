import { Character } from "./character";
import { Dice } from "./dice";
import type { Skill } from "./skill";
import type { Weapon } from "./weapon";
import type { WeaponSkill } from "./weapon-skill";
import type { Action } from './action';
import type { Item } from "./item";

export class Player extends Character {
  challengeLevel: number;
  hitPoints: number;
  skills: Skill[];
  diplomatic: number;
  militant: number;
  reputation: number;
  weapon: Weapon | null;
  armor: Item | null;

  special: Item[];
  backpack: Item[];
  money: number;

  dice = new Dice();

  constructor(name: string, details: string, cl: number, hp: number, skills: Skill[]) {
    super(name, details);
    this.challengeLevel = cl;
    this.hitPoints = hp;
    this.skills = skills;

    this.diplomatic = 0;
    this.militant = 0;
    this.reputation = 0;

    this.weapon = null;
    this.armor = null;
    this.special = [];
    this.backpack = [];
    this.money = 0;
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

  takeAction(action: Action) {
    if(action.diplomatic) this.diplomatic += action.diplomatic;
    if(action.militant) this.militant += action.militant;
    if(action.reputation) this.reputation += action.reputation;
  }

  equip(weapon: Weapon) {
    this.weapon = weapon;
  }

  unequip() {
    this.weapon = null;
  }
}