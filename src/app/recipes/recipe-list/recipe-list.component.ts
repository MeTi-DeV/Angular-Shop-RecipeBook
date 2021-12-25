import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  recipes: Recipe[] = [
    new Recipe(
      "It's a test",
      'Description of test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpW3QiSWw9KfBEH_JnfEkepE3VQavLQOICwQ&usqp=CAU'
    ),
    new Recipe(
      "It's a test",
      'Description of test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpW3QiSWw9KfBEH_JnfEkepE3VQavLQOICwQ&usqp=CAU'
    ),
    new Recipe(
      "It's a test",
      'Description of test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpW3QiSWw9KfBEH_JnfEkepE3VQavLQOICwQ&usqp=CAU'
    ),
    new Recipe(
      "It's a test",
      'Description of test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpW3QiSWw9KfBEH_JnfEkepE3VQavLQOICwQ&usqp=CAU'
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
  }
}
