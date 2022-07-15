import { Dice } from '../src/models/dice';
import { Log } from '../src/models/log';

describe('test dice functionality', () => {
  it('should have rolls and roll log', () => {
    const dice = new Dice();

    expect(dice.rolls).toBeDefined();
    expect(dice.rollLog).toBeDefined();
    
    expect(dice.rolls).toStrictEqual([]);
    expect(dice.rollLog).toStrictEqual(new Log());
  });

  it('should roll the correct number of dice', () => {
    const dice = new Dice();
    dice.roll(1);
    expect(dice.rolls.length).toBe(1);
    dice.roll(2);
    expect(dice.rolls.length).toBe(2);
  });

  it('should calculate # of wins correctly', () => {  
    const dice = new Dice();
    let roll = dice.roll(1).rolls;
    let wins = (roll.filter((d) => d > 3)).length;
    expect(dice.wins()).toBe(wins);
    roll = dice.roll(3).rolls;
    wins = (roll.filter((d) => d > 3)).length;
    expect(dice.wins()).toBe(wins);
  });

  it('should calculate total of dice correctly', () => {
    const dice = new Dice();
    let roll = dice.roll(1).rolls;
    let sum = roll.reduce((total, r) => total + r, 0);
    expect(dice.total()).toBe(sum);
    roll = dice.roll(3).rolls;
    sum = sum = roll.reduce((total, r) => total + r, 0);
    expect(dice.total()).toBe(sum);
  });

  it('should roll between a 1 and a 6', () => {
    const dice = new Dice();
    for(let i = 0; i < 100; i++) {
      dice.roll(1);
      expect(dice.total() >= 1 && dice.total() <= 6).toBe(true);
    }
  });

  it('should calculate losses correctly', () => {
    const dice = new Dice();
    let roll = dice.roll(1).rolls;
    let losses = (roll.filter((d) => d < 4)).length;
    expect(dice.losses()).toBe(losses);
    roll = dice.roll(3).rolls;
    losses = (roll.filter((d) => d < 4)).length;
    expect(dice.losses()).toBe(losses);
  });

  it('should return true if is epic win', () => {
    const dice = new Dice();
    dice.rolls = [ 6, 6, 6];
    const check = dice.isEpicWin();
    expect(check).toBe(true);
  });

  it('should return true if is epic fail', () => {
    const dice = new Dice();
    dice.rolls = [ 1, 1, 1];
    const check = dice.isEpicFail();
    expect(check).toBe(true);
  });

  it('should return false if is epic win', () => {
    const dice = new Dice();
    dice.rolls = [ 6, 1, 6];
    const check = dice.isEpicWin();
    expect(check).toBe(false);
  })

  it('should return false if is epic fail', () => {
    const dice = new Dice();
    dice.rolls = [ 1, 6, 1];
    const check = dice.isEpicFail();
    expect(check).toBe(false);
  })
});