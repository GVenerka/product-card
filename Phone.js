export class Smartphone {
  constructor(name, model, country) {
    this.name = name;
    this.model = model;
    this.country = country;
  }

  getInfo() {
    console.log(`Смартфон ${this.name} ${this.model} произведен в ${this.country}`);
  }
}