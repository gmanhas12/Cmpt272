import{Pig} from './pigAttributes';
import{Category} from './pigAttributes';



export class WhitePig extends Pig{
    running: number;
  
    constructor(name: String, breed: String, height: number, weight: number, personality: String, running: number){
      super(name, Category.white, breed, height, weight, personality);
      this.running = running;
    }
  }