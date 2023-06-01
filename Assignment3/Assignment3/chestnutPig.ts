import{Pig} from './pigAttributes';
import{Category} from './pigAttributes';

export class ChestnutPig extends Pig{
    language: String;
  
    constructor(name: String, breed: String, height: number, weight: number, personality: String, language: String){
      super(name, Category.chestnut, breed, height, weight, personality);
      this.language = language;
    }
  }