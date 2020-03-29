import DishType from "./dishType"
import { MenuCategory } from "../categories"

class Dish {
  name: string;
  type: DishType;
  category: MenuCategory;

  constructor(name, type, category) {
    this.name = name;
    this.type = type;
    this.category = category
  }
}

export default Dish