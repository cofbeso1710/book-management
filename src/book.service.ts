// import { Injectable } from '@angular/core';
// import { Book } from './book';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })


// private books: Book[]= [];

//   // addBooks(newBooks: Book[]) {
//   //   this.books.push(...newBooks);
//   //   console.log('Sách đã được thêm:', this.books);
//   // }

//   // getBooks():Book[]{
//   //   return this.books;
//   // }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://210.211.96.129:8777/api/books';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmYyNzczOTVhNTMwZTkxZTc4M2RkYTciLCJlbWFpbCI6ImhhcnJpZXRAeWFob28uY29tIiwidXNlck5hbWUiOiJIYXJyaWV0MTIzIiwiaWF0IjoxNzI3MTY2NDgzfQ.TGHkKvcpQz32R6wjygiUxCf1gpPxFoV5xIIxiGh9oQY';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders{
    return new HttpHeaders().set('x-auth-token', this.token);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book, { headers: this.getHeaders() });
  }

  deleteBook(bookId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${bookId}`, { headers: this.getHeaders() });
  }

  updateBook(bookId: string, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${bookId}`, book, { headers: this.getHeaders() });
  }
}
