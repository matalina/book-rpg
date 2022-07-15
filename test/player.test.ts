import { Dice } from '../src/models/dice';
import { Player } from '../src/models/player';
import { Skill } from '../src/models/skill';
import { Weapon } from '../src/models/weapon';
import { WeaponSkill } from '../src/models/weapon-skill';

describe('test player functionality', () => {
  let player: Player;

  beforeEach(() => {
    const skill = new Skill('skill','details');
    const weaponSkill = new WeaponSkill('skill','detail','Double Edge Bladed Weapon');
    const skills = [skill, weaponSkill];
    player = new Player('name','',6, 22, skills);
  });

  it('should have the right properties and methods', () => {
    const skill = new Skill('skill','details');
    const skills = [skill];
    const player = new Player('name','details',6, 22, skills);

    expect(player.name).toBe('name');
    expect(player.details).toBe('details');
    expect(player.challengeLevel).toBe(6);
    expect(player.hitPoints).toBe(22);
    expect(player.dice).toStrictEqual(new Dice());
    expect(player.skills).toStrictEqual([skill]);

    expect(player.takeDamage).toBeDefined;
    expect(player.hasSkill).toBeDefined;
    expect(player.hasWeaponSkill).toBeDefined;
    expect(player.roll).toBeDefined;
  });

  it('should loser hit points when damage is taken', () => {
    player.takeDamage(3);
    expect(player.hitPoints).toBe(19);
  });

  it('should roll determined number of dice and return number of wins', () => {
    player.roll(1);
    const wins = player.dice.wins();
    const manual = player.dice.rolls.filter(roll => roll > 3).length;

    expect(wins).toBeGreaterThanOrEqual(0);
    expect(player.dice.rolls.length).toBe(7);
    expect(wins).toBe(manual);
  });

  it('should return true if a player has a skill', () => {
    const check = player.hasSkill('skill');

    expect(check).toBe(true);
  });

  it('should return false if a player does not have a skill', () => {
    const check = player.hasSkill('happy');

    expect(check).toBe(false);
  });

  it('should return false if a character does not have skill with a specific weapon type', () => {
    const weapon = new Weapon('name','detals',1,0,'Single Edge Bladed Weapon');
      const check = player.hasWeaponSkill(weapon);
      expect(check).toBe(false);
  });

  it('should return true if a character has skill with a specific weapon type', () => {
    const weapon = new Weapon('name','detals',1,0,'Double Edge Bladed Weapon');
      const check = player.hasWeaponSkill(weapon);
      expect(check).toBe(true);
  });

  it('should return true if a challenge is won', () => {
    const check = player.challenge(3, 3);
    expect(check).toBe(true);
  });

  it('should return true if a challenge is won', () => {
    const twoDice = 2 - player.challengeLevel;
    const check = player.challenge(twoDice, 3);
    expect(check).toBe(false);
  });

});