export default class Api {
  private readonly x: number;

  constructor() {
    this.x = 123;
  }

  sum(a: number, b: number) {
    return this.x + a + b;
  }

  toString(): string {
    return `Saying ${this.x}`;
  }
}
