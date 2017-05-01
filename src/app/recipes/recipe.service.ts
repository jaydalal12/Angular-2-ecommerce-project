import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class RecipeService {
  recipeChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Schnizel', 'Very Tasty' , 'https://www.quilzer.net/assets/WienerSchnitzel.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Onion', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish' , 'https://www.quilzer.net/assets/the_perfect_summer_salad.jpg', [])
  ];
  constructor(private http: Http) { }
  getRecipes() {
    return this.recipes;
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
  addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
  }
  editRecipe(oldReipe: Recipe, newRecipe: Recipe) {
      this.recipes[this.recipes.indexOf(oldReipe)] = newRecipe;
  }
  storeData() {
    const body = JSON.stringify(this.recipes);
    const header = new Headers({
      'Content-Type' : 'application/json'
    });
    return this.http.put('https://recipe-book-862ee.firebaseio.com/recipes.json', body , { headers: header});
  }
  fetchData() {
    return this.http.get('https://recipe-book-862ee.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data ;
          this.recipeChanged.emit(this.recipes);
          console.log(data);
        }
      ) ;
  }

}
