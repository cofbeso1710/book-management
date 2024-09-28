import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookManagementComponent } from './book/book-management/book-management.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { FilterPipe } from '../filter.pipe';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './book/search/search.module';
import { BookComponent } from './book/book.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    LoginComponent,
    BookManagementComponent,
    AddBookComponent,
    BookComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
