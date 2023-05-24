import { Ingredient } from "../dataModel/Ingredient.model";

export class ShoppingService{
    private ingredients:Ingredient[]=[
        new Ingredient('Egg',10),
        new Ingredient('Milk',1),
        new Ingredient('Sugar',1)
    ]
    getIngredients(){
return this.ingredients;
    }

   
}