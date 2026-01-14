import { Drink } from "./Drink.js";

export class Milkshake extends Drink {

  constructor(name, size, price, temperature, taste) {
    super(name, size, price, temperature);
    this.taste = taste;
  }
  
  chooseTaste(taste) {
    this.taste = taste;
  }
}