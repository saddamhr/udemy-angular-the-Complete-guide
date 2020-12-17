import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

   private recipes:Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-768x1152.jpg'),
        new Recipe('An Test Recipe', 'This is simply a test', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-768x1152.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}