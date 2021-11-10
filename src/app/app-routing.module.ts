import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'Books', pathMatch: 'full'
  },
  {
    path: 'Books', component: BooksComponent
  },
  {
    path: 'Movies', component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
