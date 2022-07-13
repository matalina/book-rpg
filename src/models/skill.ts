import { slugify } from "../helpers";

export class Skill {
  id: string;
  name: string;
  challengeLevelModifier: number;
  details: string;

  constructor(name: string, mod: number, details: string) {
    this.id = slugify(name);
    this.name = name;
    this.challengeLevelModifier = mod;
    this.details = details;

    return this;
  }

  use() {
    return this.challengeLevelModifier;
  }
};