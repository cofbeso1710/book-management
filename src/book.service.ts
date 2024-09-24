import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[]= [];

  addBooks(newBooks: Book[]) {
    this.books.push(...newBooks);
    console.log('Sách đã được thêm:', this.books);
  }

  getBooks():Book[]{
    return this.books;
  }
}
