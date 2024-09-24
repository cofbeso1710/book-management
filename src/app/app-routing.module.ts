import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManagementComponent } from './book-management/book-management.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  { path: 'book-management', component: BookManagementComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: '', redirectTo: '/book-management', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
