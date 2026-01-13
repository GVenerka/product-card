import { Drink } from "./Drink.js";

export class Tea extends Drink {

  constructor(name, size, price, temperature, type) {
    super(name, size, price, temperature);
    this.type = type;
  }
  
}