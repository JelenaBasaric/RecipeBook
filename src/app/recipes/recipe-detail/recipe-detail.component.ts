import { Component } from '@angular/core';
import { Recipe } from 'src/app/dataModel/Recipe.model';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  recipe:Recipe[]=[];

}
