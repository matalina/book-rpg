import { Character } from '../src/models/character';

describe('test character functionality', () => {
  it('should have a name and details', () => {
    const character = new Character('name','details');

    expect(character.name).toBe('name');
    expect(character.details).toBe('details');
  });
})