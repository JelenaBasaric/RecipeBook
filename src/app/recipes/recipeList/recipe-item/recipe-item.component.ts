import { Component,Input,OnInit } from '@angular/core';

import{ActivatedRoute,Router,Params} from '@angular/router'

import { Recipe } from 'src/app/dataModel/Recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe!:Recipe;
  @Input() index!:number;

  ngOnInit(): void {
    
  }

}
