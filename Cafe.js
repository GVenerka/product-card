export class Cafe {

  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    return ((this.name, this.location).toString());
  }

  orderDrink(drink) {
    drink.serveDrink();
  }

}