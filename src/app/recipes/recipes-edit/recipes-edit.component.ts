import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Ingredient } from 'src/app/dataModel/Ingredient.model';
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
      });
  }
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          // recipeIngredients.push((new FormGroup({
          //   'name': new FormControl(null, Validators.required),
          //   'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          // }))
        }
      }
    }     
      this.recipeForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'imageUrl': new FormControl(null, Validators.required),
        'descreption': new FormControl(null, Validators.required),
        'ingredients': recipeIngredients
      });
    }
    onAddIngredient(){
      (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      }))


    }
  get controls() { // a getter!
      return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }


    onSubmit() {
      if (this.editMode) {
        this.recipeService.updateRecipe(this.id, this.recipeForm.value)
      }
      else {
        this.recipeService.addRecepie(this.recipeForm.value)
      }
      this.onCancel();

    }
    onCancel() {
      this.router.navigate(['../'], { relativeTo: this.route })
    }
    onDeleteIngredient(index: number) {
      (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }




  }
