import { Subject } from "rxjs";
import { Ingredient } from "../dataModel/Ingredient.model";

export class ShoppingService{
    ingredientsChanged=new Subject<Ingredient[]>()
    startedEditing=new Subject<number>();
    private ingredients:Ingredient[]=[
        new Ingredient('Egg',10),
        new Ingredient('Milk',1),
        new Ingredient('Sugar',1)
    ]
    getIngredients(){
return this.ingredients;
    }
     updateIngredients(id:number,newIngredient:Ingredient){
this.ingredients[id]=newIngredient;
this.ingredientsChanged.next(this.ingredients)

     }

   
}