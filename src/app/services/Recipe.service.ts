import { Injectable } from "@angular/core";
import {Subject} from "rxjs"
import { ShoppingService } from "./Shopping.service";
import { Recipe } from "../dataModel/Recipe.model";
import { Ingredient } from "../dataModel/Ingredient.model";

@Injectable()
export class RecipeService{
    constructor(private shoppingService:ShoppingService){}
    recipesChanged=new Subject<Recipe[]>();
    private recipes:Recipe[]=[
        new Recipe('Pancakes','I love sweet','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGc7u6bLXSCfqpknOsDwh3GBHvBya1fSOKg&usqp=CAU',[
            new Ingredient('nutella',1)]),
        new Recipe('Chocolate cake',"Mmmmmmmmmmm",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxmXeqdZAjjRSDon3H4_1Xn-ahuLo8a19vg&usqp=CAU',
        [new Ingredient('dark chocolate',1)])

        ];

        setRecipes(recipes:Recipe[]){
            this.recipes=recipes;
            this.recipesChanged.next(this.recipes)
        }
    getRecipes(){

        return this.recipes;
    }
    getRecipe(id:number){
        return this.recipes[id];
    }
    updateRecipe(id:number,newRecipie:Recipe){
        this.recipes[id]=newRecipie;
        this.recipesChanged.next(this.recipes)
    }
    addRecepie(newRecepie:Recipe){
        this.recipes.push(newRecepie);
        this.recipesChanged.next(this.recipes);
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingService.addIngredients(ingredients);
    }
    deleteRecipe(id:number){
        this.recipes.splice(id,1);
        this.recipesChanged.next(this.recipes)

    }

}