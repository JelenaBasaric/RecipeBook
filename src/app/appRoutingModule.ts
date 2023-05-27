import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { StartRecipesComponent } from './recipes/start-recipes/start-recipes.component';
import { RecipeReselverService } from './services/recipesResolver.service';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: StartRecipesComponent },
      { path: 'new', component: RecipesEditComponent },
      {
        path: ':id', component: RecipeDetailComponent, resolve: [RecipeReselverService]
      },
      {path: ':id/edit',component: RecipesEditComponent,resolve: [RecipeReselverService] }
    ],},
    {path :"auth",component: AuthComponent},
  { path: 'shopping-list', component: ShoppingListComponent }]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
