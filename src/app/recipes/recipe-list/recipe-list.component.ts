import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
    new Recipe('A Test1 Recipe', 'This is simply a test', 'https://extra-sushi.rs/images/proizvod/sushi-beograd-dostava-restoran-2020-08-04-19-18-20.jpg'),
    new Recipe('Another Recipe', 'This is simply a test', 'https://extra-sushi.rs/images/proizvod/sushi-beograd-dostava-restoran-2020-08-04-19-18-20.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
