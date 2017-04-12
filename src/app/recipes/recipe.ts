import {Ingredient} from '../shared/ingredient';
export class Recipe {
  constructor(public name: string, public descrssiption: string, public imagePath: string, public ingredients: Ingredient) {}
}
