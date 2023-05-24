import { Component,OnInit,OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/dataModel/Recipe.model';
import { RecipeService } from 'src/app/services/Recipe.service';
import{Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit,OnDestroy {
  constructor(private recipeService:RecipeService){}
  recipes:Recipe[]=[];
  subscription!:Subscription;
  ngOnInit(){
    //this.subscription=this.recipeService.
    this.recipes= this.recipeService.getRecipes();
  }
 ngOnDestroy(): void {
   this.subscription.unsubscribe();
 }

}
