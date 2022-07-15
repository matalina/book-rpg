import { WeaponSkill } from '../src/models/weapon-skill';

describe('test weapon skill functionality', () => {
  let weaponSkill: WeaponSkill;
  beforeEach(() => {
    weaponSkill = new WeaponSkill('weapon','details','Single Edge Bladed Weapon');
  });

  it('should create appropriate methods and properties', () => {
    expect(weaponSkill.name).toBe('weapon');
    expect(weaponSkill.details).toBe('details');
    expect(weaponSkill.type).toBe('Single Edge Bladed Weapon');
  });
});