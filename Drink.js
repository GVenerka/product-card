export class Drink {

  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return ((this.name, this.size, this.price, this.#temperature).toString());
  }

  getDrinkTemperature() {
    return (`температура ${this.name} ${this.#temperature} градусов`);
  }

  setDrinkTemperature(property) {
    this.#temperature = property;
  }

  #prepareDrink() {
    this.setDrinkTemperature();
    return (`${this.name} готовится`);
  }

  serveDrink() {
    this.#prepareDrink();
    return (`Ваш ${this.name} готов`);
  }

}