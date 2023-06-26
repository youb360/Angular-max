import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe 1','test',
      'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/3:2/w_5244,h_3496,c_limit/04102023-ratatouille-lede.jpg'),
    new Recipe('A test Recipe 2','test',
      'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/3:2/w_5244,h_3496,c_limit/04102023-ratatouille-lede.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
