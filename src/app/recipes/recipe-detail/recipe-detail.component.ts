import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
@Input() selectedRecipe: Recipe;
  constructor(private sls: ShoppingListService) { }
  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
  ngOnInit() {
  }

}
