import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';
import { BookService } from '../../book.service';

@Component({
  selector: 'book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {
  name: string = '';
  status: string = '';
  books: Book[] = [
      { id: 1, name: 'Nguyên lý lập trình', status: 'Đã đọc', editing: false, purchaseDate: '2023-01-15', createdAt: new Date('2023-01-15') },
      { id: 2, name: 'Lập trình Angular', status: 'Chưa đọc', editing: false, purchaseDate: '2023-02-10', createdAt: new Date('2023-02-10') },
      { id: 3, name: 'Cấu trúc dữ liệu', status: 'Đã đọc', editing: false, purchaseDate: '2022-12-20', createdAt: new Date('2022-12-20') },
      { id: 4, name: 'Thuật toán', status: 'Chưa đọc', editing: false, purchaseDate: '2023-03-05', createdAt: new Date('2023-03-05') },
      { id: 5, name: 'Phát triển phần mềm', status: 'Đã đọc', editing: false, purchaseDate: '2023-01-01', createdAt: new Date('2023-01-01') },
      { id: 6, name: 'Lập trình Java', status: 'Chưa đọc', editing: false, purchaseDate: '2023-02-25', createdAt: new Date('2023-02-25') },
      { id: 7, name: 'Cơ sở dữ liệu', status: 'Đã đọc', editing: false, purchaseDate: '2023-04-15', createdAt: new Date('2023-04-15') },
      { id: 8, name: 'Hệ điều hành', status: 'Chưa đọc', editing: false, purchaseDate: '2023-05-05', createdAt: new Date('2023-05-05') },
      { id: 9, name: 'Lập trình Python', status: 'Đã đọc', editing: false, purchaseDate: '2023-06-30', createdAt: new Date('2023-06-30') },
      { id: 10, name: 'Lập trình web', status: 'Chưa đọc', editing: false, purchaseDate: '2023-07-15', createdAt: new Date('2023-07-15') }
  ];

  deleteBook(bookId: number) {
    this.books = this.books.filter(book => book.id !== bookId);
  }

  editBook(book: Book) {
    book.editing = true;
  }

  saveBook(book: Book) {
    book.editing = false;
  }

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks().map(book => ({
      ...book,
      createdAt: new Date()
    }));
  }
}
