import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

   private recipes:Recipe[] = [
        new Recipe(
            'A Test Recipe',
             'This is simply a test',
              'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-768x1152.jpg',
               [
                   new Ingredient('Meat', 1),
                   new Ingredient('French Fries', 20)
               ]),
        new Recipe(
            'An Test Recipe',
         'This is simply a test',
          'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-768x1152.jpg',
           [
               new Ingredient('Buns', 2),
               new Ingredient('Meat', 1)
           ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients)
      }
}