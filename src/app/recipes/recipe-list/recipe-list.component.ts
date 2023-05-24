import { Component } from '@angular/core';
import { Recipe } from 'src/app/dataModel/Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[]=[];

}
