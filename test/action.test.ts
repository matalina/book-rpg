import { Action } from '../src/models/action';

describe('test action functionality', () => {
  it('should have a name and details', () => {
    const action = new Action('action',1,1,1);

    expect(action.text).toBe('action');
    expect(action.diplomatic).toBe(1);
    expect(action.militant).toBe(1);
    expect(action.reputation).toBe(1);
  })
})