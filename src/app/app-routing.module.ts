import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { BookManagementComponent } from './book/book-management/book-management.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: BookComponent, children: [
    {path: 'book-management', component:BookManagementComponent},
    {path: 'add-book',component:AddBookComponent}
  ]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
