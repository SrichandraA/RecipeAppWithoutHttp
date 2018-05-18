import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from './../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList:RecipeModel[] =[];

  constructor(private recipeService:RecipeService , private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipeList=this.recipeService.getRecipes();
  }

  onAddRecipe(){
    this.router.navigate(['new'],{relativeTo:this.activatedRoute});
  }
}
