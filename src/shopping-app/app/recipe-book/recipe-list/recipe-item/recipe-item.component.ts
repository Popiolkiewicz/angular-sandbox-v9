import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeIndex: number;
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // this.recipe = this.recipeService.getRecipe(this.recipeIndex);
  }

  // onRecipeItemClick() {
  //   this.recipeService.selectedRecipe.emit(this.recipe);
  // }
}
