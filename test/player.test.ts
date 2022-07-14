import { Dice } from '../src/models/dice';
import { Player } from '../src/models/player';

describe('test player functionality', () => {
  it('should have the right properties and methods', () => {
    const player = new Player('name','details',6, 22);

    expect(player.name).toBe('name');
    expect(player.details).toBe('details');
    expect(player.challengeLevel).toBe(6);
    expect(player.hitPoints).toBe(22);
    expect(player.dice).toStrictEqual(new Dice());
  })
});