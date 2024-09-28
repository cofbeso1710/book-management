import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {
  title: string ='';
  author: string ='';
  books: Book[]=[];
  editingBook: Book | null=null;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
      },
      error => {
        console.error('Lỗi khi tải sách:', error);
      }
    );
  }
  
  editBook(book: Book) {
    this.editingBook =book
  }
  
  saveBook() {
    if (this.editingBook) {
      console.log('Dữ liệu chuẩn bị gi lên API', this.editingBook);
      this.bookService.updateBook(this.editingBook._id!, this.editingBook).subscribe(
        updateBook => {
          console.log('Dữ liệu sau khi cập nhật:', updateBook);
          const index = this.books.findIndex(book => book._id === updateBook._id);
          if (index !== -1) {
            this.books[index] = updateBook;
          }
          this.editingBook=null;
        },
        error => {
          console.error('Lỗi khi cập nhật sách:', error);
        }
      )
    }
  }

  deleteBook(bookId: string){
    const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa cuốn sách này không?');
    if (confirmDelete) {
    this.bookService.deleteBook(bookId).subscribe(
      () => {
        this.books = this.books.filter(book => book._id !== bookId);
      },
      error => {
        console.error('Lỗi khi xóa sách:', error);
      }
    )
  }
}

}