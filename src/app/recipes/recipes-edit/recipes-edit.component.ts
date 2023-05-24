import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/Recipe.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  editMode = false;
  id!: number;
  recipeForm!: FormGroup;
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();

      }
    );

    }
  private initForm() {
    let recipeName = '';
    let recipePath = '';
    let description = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode){
      const recipe=this.recipeService.getRecipe(this.id)
      recipeName=recipe.name;
     recipePath = recipe.imagePath;
     description = recipe.description;
     recipeIngredients=recipeIngredients;
    if(recipe['ingredients']){
      for(let ing of recipe.ingredients){
        recipe.ingredients.push(
          new FormGroup({
            'name':new FormControl(null,Validators.required),
            'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
        )
      }
    }

    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeIngredients
    });
  }
  onSubmit(){
  if(this.editMode){
    this.recipeService.updateRecipe(this.id,this.recipeForm.value)
  }
  else{
    this.recipeService.addRecepie(this.recipeForm.value)
  }
    
  }

 



}
