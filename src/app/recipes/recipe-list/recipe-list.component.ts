import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent} from './recipe-item.component';
import {Ingredient} from '../../shared/ingredient';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Schnizel', 'Very Tasty' , 'https://www.quilzer.net/assets/WienerSchnitzel.jpg',
    new Ingredient('AAA', 20)),
  new Recipe('Summer Salad', 'Okayish' , 'https://www.quilzer.net/assets/the_perfect_summer_salad.jpg',
    new Ingredient('AAA', 20))
];
@Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
