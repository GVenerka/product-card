class Smartphone {
  constructor(name, model, country) {
    this.name = name;
    this.model = model;
    this.country = country;
  }

  getInfo() {
    console.log(`Смартфон ${this.name} ${this.model} произведен в ${this.country}`);
  }
}

class Iphone extends Smartphone {
  constructor(name, model, country, year) {
    super(name, model, country);
    this.year = year;
  }

  showYear() {
    console.log(`${this.name} ${this.model} ${this.year} года производства`);
  }
}

const phoneTest = new Iphone('Айфон', 13, 'Китай', 2021);
phoneTest.getInfo();
phoneTest.showYear();