import { Component, OnInit,OnDestroy } from '@angular/core';
import { Ingredient } from '../dataModel/Ingredient.model';
import { ShoppingService } from '../services/Shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  implements OnInit,OnDestroy{
  ingredients!:Ingredient[];
  subscription!:Subscription;
  constructor(private spService:ShoppingService){}

ngOnInit(): void {
  this.ingredients=this.spService.getIngredients();
  this.subscription=this.spService.ingredientsChanged.subscribe(
    (ingredients:Ingredient[])=>{
      this.ingredients=ingredients});
  }
  onEditItem(index: number) {
    this.spService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
