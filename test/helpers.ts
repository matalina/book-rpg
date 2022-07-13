import { Player } from "../src/models/player";

export const CL_BASE = 3;
export const HP_BASE = 10;

export function createCharacter(name: string) {
  const cl = 3 + CL_BASE;
  const hp = 6 + HP_BASE;

  const character = new Player(name, '', cl, hp);

  return character;
}