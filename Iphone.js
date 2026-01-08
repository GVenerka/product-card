import { Smartphone } from './Phone.js' ;

export class Iphone extends Smartphone {

  constructor(name, model, country, year) {
    super(name, model, country);
    this.year = year;
  }

  showYear() {
    console.log(`${this.name} ${this.model} ${this.year} года производства`);
  }
  
}