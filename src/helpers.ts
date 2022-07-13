export function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-zA-Z0-9]+/,'-');
}

export function calculateCombatRatio(pc: number, enemy: number) {
  return pc - enemy;
}