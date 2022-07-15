import { Skill } from '../src/models/skill';

describe('test skill functionality', () => {
  it('should create the appropriate methods and properties', () => {
    const skill = new Skill('name','skill');

    expect(skill.name).toBe('name');
    expect(skill.details).toBe('skill');
  });
});