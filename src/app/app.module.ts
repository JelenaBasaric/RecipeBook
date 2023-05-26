import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipeList/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shoppingList/shopping-edit/shopping-edit.component';
import { Recipe } from './dataModel/Recipe.model';
import { RecipeService } from './services/Recipe.service';
import { ShoppingService } from './services/Shopping.service';
import { AppRoutingModule } from './appRoutingModule';
import { DropdownDirective } from './dropdown.directives';
import { StartRecipesComponent } from './recipes/start-recipes/start-recipes.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
   DropdownDirective,
    StartRecipesComponent,
    RecipesEditComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
    AppRoutingModule,
  ],
  providers: [RecipeService,ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
