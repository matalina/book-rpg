import { Dice } from "./dice";
import { Item } from "./item";

export type WeaponType = 'Single Edge Bladed Weapon'
  | 'Double Edge Bladed Weapon'
  | 'Edgeless Bladed Weapon'
  | 'Throwing Weapon'
  | 'Ranged Weapon'
  | 'Bludgeoning Weapon';

export class Weapon extends Item {
  count: number;
  modifier: number;
  type: WeaponType;
  
  constructor(name: string, details: string, count = 1, modifier = 0, type: WeaponType) {
    super(name, details);
    this.count = count;
    this.modifier = modifier;
    this.type = type;
  }

  damage(mod = 0) {
    const dice = new Dice();
    const damage = dice.roll(this.count).total() + this.modifier + mod;
    if (damage < 0) return 0;
    return damage;
  }
}