import { Component,OnInit } from '@angular/core';
import { Recipe } from 'src/app/dataModel/Recipe.model';
import { RecipeService } from 'src/app/services/Recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit {
  constructor(private recipeService:RecipeService){}
  recipes:Recipe[]=[];
  ngOnInit(){
    this.recipes= this.recipeService.getRecipes();
  }
 

}
