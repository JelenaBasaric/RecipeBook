import { Injectable } from "@angular/core";
import { ShoppingService } from "./Shopping.service";
import { Recipe } from "../dataModel/Recipe.model";
import { Ingredient } from "../dataModel/Ingredient.model";

@Injectable()
export class RecipeService{
    constructor(shoppingService:ShoppingService){}
    
    private recipes:Recipe[]=[
        new Recipe('Pancakes','I love sweet','https://www.foodleclub.com/wp-content/uploads/2021/06/how-to-make-proper-pancakes-4.jpg',[
            new Ingredient('nutella',1)]),
        new Recipe('Chocolate cake',"Mmmmmmmmmmm",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxmXeqdZAjjRSDon3H4_1Xn-ahuLo8a19vg&usqp=CAU',
        [new Ingredient('dark chocolate',1)])

        ]
    getRecipes(){
        return this.recipes;
    }

}