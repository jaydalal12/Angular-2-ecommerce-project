import { Injectable } from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnizel', 'Very Tasty' , 'https://www.quilzer.net/assets/WienerSchnitzel.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Onion', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish' , 'https://www.quilzer.net/assets/the_perfect_summer_salad.jpg', [])
  ];
  constructor() { }
  getRecipes() {
    return this.recipes;
  }

}
