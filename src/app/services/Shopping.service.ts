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
     getIngredient(index:number){
        return this.ingredients[index];
     }
     addIngredient(newIngredient:Ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients);

     }
   
     deleteIngredient(id:number){
      this.ingredients.splice(id,1);
      this.ingredientsChanged.next(this.ingredients)
        
        
     }
     addIngredients(ingredients: Ingredient[]) {
     
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
    
      updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }

   
}