import { MenuDishes } from "./dishes"
import { MenuCategories } from "./categories"

class Menu {
  dishes: MenuDishes;
  categories: MenuCategories;

  constructor(dishes: MenuDishes, categories: MenuCategories) {
    this.dishes = dishes
    this.categories = categories
  }
}