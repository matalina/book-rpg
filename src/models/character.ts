import { calculateCombatRatio } from "../helpers";
import { Backpack } from "./backpack";
import { Credits} from "./credits";
import { Npc } from "./npc";
import { Skill } from "./skill";

export class Character {
  challengeLevel: number;
  healthPoints: number;
  credits: Credits;
  backpack: Backpack;
  skills: Skill[];
  name: string;

  constructor(name: string, cl: number, hp: number, sk: Skill[], creds: number) {
    this.name = name;
    this.challengeLevel = cl + 10;
    this.healthPoints = hp + 20;
    this.skills = sk;
    this.credits = new Credits(creds * 100);
    this.backpack = new Backpack(8);

    return this;
  }

  hasSkill(name: string): boolean {
    for(let i in this.skills) {
      if(this.skills[i].name === name) {
        return true;
      }
    }
    return false;
  }

  #calculateChallengeLevel() {
    return this.challengeLevel;
  }

  takeDamage(opponent: number, roll:number) {
    const ratio = calculateCombatRatio(this.#calculateChallengeLevel(), opponent);
    const damage = roll - ratio;
    if (damage >= 0) return;
    this.healthPoints -= damage;

    return this;
  }
}