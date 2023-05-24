import { NgModule } from "@angular/core"
import {Routes, RouterModule } from "@angular/router"
import { RecipesComponent } from "./recipes/recipes.component"
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component"
import { StartRecipesComponent } from "./recipes/start-recipes/start-recipes.component"
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component"
const appRoutes:Routes=[
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',component: RecipesComponent,children:[
        {path:'',component: StartRecipesComponent},
        {path:'new',component: RecipesEditComponent},
        {path:':id',component:RecipeDetailComponent},
        {path:':id/edit',component: RecipesEditComponent}
    ]}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    
})

export class AppRoutingModule{

}