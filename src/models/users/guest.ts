import Person from "./person"
import Attendance from "../event/attendance"
import Dish from "../menu/dish"

class Guest implements Person {
  name: string;
  email: string;
  attendance: Attendance;
  dish: Dish | null;

  constructor(
    name: string,
    email: string,
    attendance: Attendance,
    dish: Dish | null) {
    this.name = name
    this.email = email
    this.attendance = attendance
    this.dish = dish
  }
}

export default Guest