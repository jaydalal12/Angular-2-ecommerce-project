import {Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent} from './recipe-item.component';
import {Ingredient} from '../../shared/ingredient';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [];
  /*@Output() recipeSelected = new EventEmitter<Recipe>();*/
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanged.subscribe(
      (recip: Recipe[]) => this.recipes = recip
    );
  }
  /*onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }*/
}
