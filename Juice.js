import { Drink } from "./Drink.js";

export class Juice extends Drink {

  constructor(name, size, price, temperature, fruit) {
    super(name, size, price, temperature);
    this.fruit = fruit;
  }
  
  chooseFruit(fruit) {
    this.fruit = fruit;
  }
}