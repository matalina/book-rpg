import { Container} from '../src/models/container';
import { Item } from '../src/models/item';

describe('test container functionality', () => {
  it('should create properties and methods required', () => {
    const container = new Container('name',8);

    expect(container.name).toBe('name');
    expect(container.maxSlots).toBe(8);

    expect(container.put).toBeDefined();
    expect(container.get).toBeDefined();
    expect(container.drop).toBeDefined();
  });

  it('should add an item to the container', () => {
    const container = new Container('name',2);
    const item = new Item('item','details');

    container.put(item);
    expect(container.storage.includes(item)).toBe(true);
  });

  it('should not add an item to the container if there is no room', () => {
    const container = new Container('name',1);
    let item = new Item('item','details');
    container.put(item);
    expect(container.storage.includes(item)).toBe(true);
    item = new Item('this one','not added');
    container.put(item);
    expect(container.storage.includes(item)).toBe(false);
  });
});