import { Component, OnInit } from '@angular/core';
// comment 1 : add recpie.model to recpie-list
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css'],
})
export class RecpieListComponent implements OnInit {
  //component 2 : here define recpie array and create new object of
  //recpie.model with values
  recipe: Recipe[] = [
    new Recipe(
      'Recipe Test',
      'Recipe Test Description',
      'https://www.licious.in/blog/wp-content/uploads/2020/12/Pan-Fried-Chicken.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
