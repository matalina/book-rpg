import { Enemy } from '../src/models/enemy';
import { Weapon } from '../src/models/weapon';
jest.mock('../src/models/weapon', () => {
  return {
    Weapon: jest.fn().mockImplementation(() => {
      const weapon = {
        damage: (value: number) => {
          return 5 + value;
        } 
      };
      return weapon;
    }),
  };
});

describe('test enemy functionality', () => {
  it('should have the appropriate properties and methods', () => {
    const weapon = new Weapon('weapon','',1,0, 'Single Edge Bladed Weapon');
    const enemy = new Enemy('enemy','details',3, 22, weapon);

    expect(enemy.name).toBe('enemy');
    expect(enemy.details).toBe('details');
    expect(enemy.challengeLevel).toBe(3);
    expect(enemy.hitPoints).toBe(22);
    expect(enemy.weapon).toStrictEqual(weapon);

    expect(enemy.takeDamage).toBeDefined();
    expect(enemy.damage).toBeDefined();
  });

  it('should lower hit points when taking damage', () => {
    const weapon = new Weapon('weapon','',1,0, 'Single Edge Bladed Weapon');
    const enemy = new Enemy('enemy','details',3, 22, weapon);

    enemy.takeDamage(3);
    expect(enemy.hitPoints).toBe(19);
    enemy.takeDamage(3);
    expect(enemy.hitPoints).toBe(16);
  });

  it('should call weapon damage function and return a damage value as a positive integer or zero', () => {
    const weapon = new Weapon('weapon','',1,0,'Single Edge Bladed Weapon');
    const enemy = new Enemy('enemy','details',3, 22, weapon);

    let damage = enemy.damage(0);
    expect(damage).toBe(5);
  });
});