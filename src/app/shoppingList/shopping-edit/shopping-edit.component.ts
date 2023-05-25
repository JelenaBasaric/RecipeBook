import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/dataModel/Ingredient.model';
import { ShoppingService } from 'src/app/services/Shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  editMode = false;
  subscription!: Subscription;
  editedItemIndex!: number;
  editedItem!: Ingredient;
  editForm!: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,
    private spService: ShoppingService
    )
    { }

  ngOnInit(): void {
    this.subscription = this.spService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.spService.getIngredient(index);
          this.initForm()
        }
      );
  }
  private initForm() {
    let ingredientName = ""
    let amount = 0
  
    if(this.editMode) {
    const ingredient = this.spService.getIngredient(this.editedItemIndex);
    ingredientName = ingredient.name;
    amount = ingredient.amount
       }
    this.editForm = new FormGroup({
      'name': new FormControl(ingredientName, Validators.required),
      'amount': new FormControl(amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      
    });
  }
  onSubmit() {
        if (this.editMode) {
          this.spService.updateIngredients(this. editedItemIndex, this.editForm.value)
        }
        else {
          this.spService.addIngredient(this.editForm.value)
        }
        this.onCancel();
    
      }
      onCancel() {
      
        this.router.navigate(['shopping-list'], { relativeTo: this.route })
        
      }
      onDelete(){
        this.spService.deleteIngredient(this.editedItemIndex);
        this.onCancel();
      }


}
