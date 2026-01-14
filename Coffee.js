import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  
  constructor(name, size, price, temperature, grains) {
    super(name, size, price, temperature);
    this.grains = grains;
  }
  
  chooseGrains(grains) {
    this.grains = grains;
  }
}