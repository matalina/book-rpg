import { Item } from '../src/models/item';

describe('test item functionality', () => {
  it('should have a name and details', () => {
    const item = new Item('name','details');

    expect(item.name).toBe('name');
    expect(item.details).toBe('details');
  })
})