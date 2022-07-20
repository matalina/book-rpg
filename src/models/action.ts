export class Action {
  diplomatic: number;
  militant: number;
  reputation: number;

  text: string;

  constructor(text: string, reputation = 0, diplomatic = 0, militant = 0) {
    this.text = text;
    this.reputation = reputation;
    this.diplomatic = diplomatic;
    this.militant = militant;
  }
}