export class Log {
  #history: any[];

  constructor() {
    this.#history = [];
  }

  add(item: any) {
    this.#history.push(item);
  }

  get() {
    return this.#history;
  }
}