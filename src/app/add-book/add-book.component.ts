import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { BookService } from '../../book.service';
import { Book } from '../../book';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) {}

  ngOnInit() {
    this.bookForm = this.fb.group({
      books: this.fb.array([])
    });
  }

  get books() {
    return this.bookForm.get('books') as FormArray;
  }

  addBook() {
    const bookGroup = this.fb.group({
      id: ['', [Validators.required, Validators.maxLength(5)]],
      name: ['', Validators.required],
      purchaseDate: ['', this.dateValidator],
      status: ['Chưa đọc', Validators.required]
    });
    this.books.push(bookGroup);
  }

  dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const today = new Date();
    const purchaseDate = new Date(control.value);
    if (purchaseDate >= today) {
      return { 'invalidDate': true };
    }
    return null;
  }

  submit() {
    if (this.bookForm.valid) {
      const booksToAdd =  this.bookForm.value.books.map((book: Book) => ({
        ...book,
        createdAt: new Date()
      }));
      this.bookService.addBooks(booksToAdd);
      console.log(this.bookForm.value.books);
      this.bookForm.reset();
    }else {
      console.log("Dữ liệu không hợp lệ!", this.bookForm.errors);
    }
  }
}
