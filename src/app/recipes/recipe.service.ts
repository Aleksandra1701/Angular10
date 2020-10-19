import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('A Test1 Recipe', 'This is simply a test', 
        'https://extra-sushi.rs/images/proizvod/sushi-beograd-dostava-restoran-2020-08-04-19-18-20.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Another Recipe', 'This is simply a test', 
        'https://extra-sushi.rs/images/proizvod/sushi-beograd-dostava-restoran-2020-08-04-19-18-20.jpg',
        [
            new Ingredient ('Buns',2),
            new Ingredient('Meat', 1)
        ])
      ];

      constructor (private slService:ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
    }
