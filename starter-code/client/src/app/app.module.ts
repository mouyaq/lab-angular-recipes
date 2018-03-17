import { RecipesService } from './shared/services/recipes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { IngredientsService } from './shared/services/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
