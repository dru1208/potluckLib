import Category from "./category"

class Dish {
  name: string;
  category: Category;

  constructor(name: string, category: Category) {
    this.name = name;
    this.category = category;
  }
}

export default Dish