import{Pig} from './pigAttributes';
import{Category} from './pigAttributes';

export class BlackPig extends Pig{
    strength: number;
  
    constructor(name: String, breed: String, height: number, weight: number, personality: String, strength: number){
      super(name, Category.black, breed, height, weight, personality);
      this.strength = strength;
    }
  }