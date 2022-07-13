import { slugify } from "../helpers";

export class Item {
  id: string;
  name: string;
  challengeLevelModifier: number;
  details: string;

  constructor(name: string, modifier: number, details: string) {
    this.id = slugify(name);
    this.name = name;
    this.challengeLevelModifier = modifier;
    this.details = details;

    return this;
  }

  use() {
    return this.challengeLevelModifier;
  }
};