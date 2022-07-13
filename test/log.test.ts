import { Log } from '../src/models/log';

describe('test log functionality', () => {
  it('should have an add and get method and no public properties',() =>{
    const log = new Log();
    expect(log.add).toBeDefined();
    expect(log.get).toBeDefined();
    expect(log).not.toHaveProperty('#history');
  });

  it('should add an entry to the log', () => {
    const log = new Log();
    expect(log.get()).toStrictEqual([]);
    log.add([1, 2, 3]);
    expect(log.get()).toStrictEqual([[1, 2, 3,]]);
    log.add({name: 'test'});
    expect(log.get()).toStrictEqual([[1, 2, 3,],{name: 'test'}]);
  })
});