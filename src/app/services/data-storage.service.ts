import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "./Recipe.service";
import { Recipe } from "../dataModel/Recipe.model";

@Injectable({providedIn:"root"})
export class DataStorage{
    constructor(private http:HttpClient, private recipeService:RecipeService){}
    storeRecipes(){
        const recipes=this.recipeService.getRecipes()
        this.http.put('https://console.firebase.google.com/project/ngrecipebook-5f656/database/ngrecipebook-5f656-default-rtdb/data/~2F/recipes.json',recipes).subscribe
        (response =>{console.log(response)});
    }
    fetchRecipes(){
        this.http.get<Recipe[]>('https://console.firebase.google.com/project/ngrecipebook-5f656/database/ngrecipebook-5f656-default-rtdb/data/~2F')
        .subscribe(recipes=>{
            this.recipeService.setRecipes(recipes)
        });
    }

}