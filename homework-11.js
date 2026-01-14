import { Cafe } from "./Cafe.js";
import { Milkshake } from "./Milkshake.js";

const vanila = new Milkshake('молочный коктель', '200ml', '350 рублей', 5, 'ванильный');
vanila.getInfo();
const halal = new Cafe('Halal', 'Ufa');
halal.orderDrink(vanila);
