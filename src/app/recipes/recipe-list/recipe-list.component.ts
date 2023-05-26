import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/dataModel/Recipe.model';
import { RecipeService } from 'src/app/services/Recipe.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  constructor(private recipeService: RecipeService,private router:Router,
    private route:ActivatedRoute) { }
  recipes: Recipe[] = [];
  subscription!: Subscription;
  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      });
    this.recipes = this.recipeService.getRecipes();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onNewRecept(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
