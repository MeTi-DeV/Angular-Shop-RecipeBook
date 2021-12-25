import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sheared/Ingrediant';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 5),
    new Ingredient('Potatto', 25),
    new Ingredient('Apple', 15),
  ];
  onIngredientAdded(ingredient: Ingredient) {
   this.ingredients.push(ingredient);
  }
  constructor() {}

  ngOnInit(): void {}
}
