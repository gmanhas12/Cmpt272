import{Pig} from './pigAttributes';
import{Category} from './pigAttributes';

export class GreyPig extends Pig{
    swimming: number;
  
    constructor(name: String, breed: String, height: number, weight: number, personality: String, swimming: number){
      super(name, Category.grey, breed, height, weight, personality);
      this.swimming = swimming;
    }
  }