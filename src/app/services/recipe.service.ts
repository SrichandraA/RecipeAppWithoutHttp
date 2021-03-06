import { RecipeModel } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {

    
    constructor(private shoppingListService:ShoppingListService){}

   private recipeList : RecipeModel[] =[
        new RecipeModel("Vegan Stuff",
        "Delicious Item",
        "https://www.seriouseats.com/recipes/images/2016/09/20160926-shakshuka-17.jpg",
        [
            new Ingredient("Potatoes",5),
            new Ingredient("Spices",4),
            new Ingredient("Mint leaves",10)
        ]),
        new RecipeModel("Meat Stuff",
        "Tasty Item",
        "https://www.seriouseats.com/recipes/images/2016/09/20160926-shakshuka-17.jpg",
        [
            new Ingredient("Egg",5),
            new Ingredient("Meat",4),
            new Ingredient("Cheese slice",1)
        ])
      ];


        getRecipes(){

            return this.recipeList;
        }
    
        getRecipeById(id:number){

            return this.recipeList[id];
        }  
    
        addIngredientsToShoppingList(ingredients:Ingredient[]){
            
            this.shoppingListService.addIngredients(ingredients);
        }

        addRecipe(recipe:RecipeModel){

            this.recipeList.push(recipe);
        }

        updateRecipe(index: number, newRecipe: RecipeModel){

            this.recipeList[index] = newRecipe;
        }
    
        deleteRecipe(index: number){

            this.recipeList.splice(index,1);
        }

}
