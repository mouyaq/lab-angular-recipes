import { Recipe } from './../../../shared/models/recipe.model';
import { RecipesService } from './../../../shared/services/recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from '../../../shared/services/ingredients.service';
import { Ingredient } from '../../../shared/models/ingredient.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipe: Recipe = new Recipe();
  error: Object;

  constructor(
    private routes: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.routes.params
      .subscribe(params => {
        this.recipesService.get(params['id'])
          .subscribe((recipe) => {
            this.recipe = recipe;
          });
      });
  }

  onClickIngredient(recipe, ingredient): Recipe {
    this.recipesService.addIngredient(recipe.id, ingredient.id)
      .subscribe((recipe: Recipe) => this.recipe = recipe)
      return;
  }

}
