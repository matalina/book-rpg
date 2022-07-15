import { Skill } from "./skill";
import type { WeaponType } from "./weapon";

export class WeaponSkill extends Skill {
  type: WeaponType;

  constructor(name: string, details: string, type: WeaponType) {
    super(name, details);

    this.type = type;
  }
}