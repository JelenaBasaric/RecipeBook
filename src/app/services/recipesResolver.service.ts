import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorage } from "./data-storage.service";
import { RecipeService } from "./Recipe.service";
import { Recipe } from "../dataModel/Recipe.model";


@Injectable({ providedIn: 'root' })
export class RecipeReselverService implements Resolve<Recipe[]>{
    constructor(private dataStorage: DataStorage,
        private recipeService: RecipeService) { }
    
        resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();

        if (recipes.length === 0) {
            return this.dataStorage.fetchRecipes();
        }
        else {
            return recipes;
        }
    }
}