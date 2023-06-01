
export enum Category {
  black,
  white,
  grey,
  chestnut
}


export class Pig {
  name: String;
  category: Category;
  breed: String;
  height: number;
  weight: number;
  personality: String;

  constructor(name: String, category: Category, breed: String, height: number, weight: number, personality: String){
    this.name = name;
    this.category = category;
    this.breed = breed;
    this.height = height;
    this.weight = weight;
    this.personality = personality;
  }
}






