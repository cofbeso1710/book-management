import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchModule } from './search/search.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BookManagementComponent,
    AddBookComponent,
    FilterPipe,
    LoginComponent,
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
