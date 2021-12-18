import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css'],
})
export class RecpieListComponent implements OnInit {

  recipes: Recipe[] =[ new Recipe(
      'Recipe Test',
      'Recipe Test Description',
      'https://www.licious.in/blog/wp-content/uploads/2020/12/Pan-Fried-Chicken.jpg'
    ),
    new Recipe(
      'Recipe Test',
      'Recipe Test Description',
      'https://www.licious.in/blog/wp-content/uploads/2020/12/Pan-Fried-Chicken.jpg'
    ),new Recipe(
      'Recipe Test',
      'Recipe Test Description',
      'https://www.licious.in/blog/wp-content/uploads/2020/12/Pan-Fried-Chicken.jpg'
    ),new Recipe(
      'Recipe Test',
      'Recipe Test Description',
      'https://www.licious.in/blog/wp-content/uploads/2020/12/Pan-Fried-Chicken.jpg'
    ),
  ];



  constructor() {}

  ngOnInit(): void {}
}
