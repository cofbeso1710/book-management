import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { BookManagementComponent } from './book/book-management/book-management.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuard } from '../authentic.service';

const routes: Routes = [
  { path: 'home', component: BookComponent, children: [
    {path: 'book-management', component:BookManagementComponent},
    {path: 'add-book',component:AddBookComponent},
  ], canActivate:[AuthenticationGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
