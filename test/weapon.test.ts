import { Weapon } from '../src/models/weapon';
import { Dice } from '../src/models/dice';
jest.mock('../src/models/dice', () => {
  return {
    Dice: jest.fn().mockImplementation(() => {
      const dice = {
        rolls: [] as number[],
        roll: (value: number) => {
            for(let i = 0; i < value; i++) {
              dice.rolls.push(1);
            }
            return dice;
        },
        total: () => {
          return dice.rolls.reduce((total, r) => total += r, 0);
        }
      };
      return dice;
    }),
  };
});

describe('test weapon functionality', () => {
  let weapon: Weapon;
  beforeEach(() => {
    jest.clearAllMocks();
    weapon = new Weapon('test','details',1,1,'Single Edge Bladed Weapon');
  });

  it('should create a weapon with the correct properties and methods', () => {
    expect(weapon.name).toBe('test');
    expect(weapon.details).toBe('details');
    expect(weapon.count).toBe(1);
    expect(weapon.modifier).toBe(1);
    expect(weapon.type).toBe('Single Edge Bladed Weapon');

    expect(weapon.damage).toBeDefined();
  });

  it('should calculate damage correctly', () => {
    let weapon = new Weapon('test','details',1, 0, 'Single Edge Bladed Weapon');
    let damage = weapon.damage(0);
    
    expect(Dice).toHaveBeenCalledTimes(1);

    expect(damage).toBeGreaterThanOrEqual(1);
    expect(damage).toBeLessThanOrEqual(6);
    expect(damage).toBe(1);

    weapon = new Weapon('test','details',1, 1, 'Single Edge Bladed Weapon');
    damage = weapon.damage(0);
    expect(damage).toBeGreaterThanOrEqual(2);
    expect(damage).toBeLessThanOrEqual(7);
    expect(damage).toBe(2);

    weapon = new Weapon('test','details',1, 1, 'Single Edge Bladed Weapon');
    damage = weapon.damage(1);
    expect(damage).toBeGreaterThanOrEqual(3);
    expect(damage).toBeLessThanOrEqual(8);
    expect(damage).toBe(3);

    weapon = new Weapon('test','details',2, 0, 'Single Edge Bladed Weapon');
    damage = weapon.damage(0);
    expect(damage).toBeGreaterThanOrEqual(2);
    expect(damage).toBeLessThanOrEqual(12);
    expect(damage).toBe(2);

    weapon = new Weapon('test','details',1,-1, 'Single Edge Bladed Weapon');
    damage = weapon.damage(0);
    expect(damage).toBeGreaterThanOrEqual(0);
    expect(damage).toBeLessThanOrEqual(5);
    expect(damage).toBe(0);

    weapon = new Weapon('test','details',1,-2, 'Single Edge Bladed Weapon');
    damage = weapon.damage(0);
    expect(damage).toBeGreaterThanOrEqual(0);
    expect(damage).toBeLessThanOrEqual(5);
    expect(damage).toBe(0);
  });
});