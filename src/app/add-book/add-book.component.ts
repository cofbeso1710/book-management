import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { BookService } from '../../book.service';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  bookForm!: FormGroup;
  successMessage: string ='';
  errorMessage: string ='';

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.createForm();
  }

  createForm(){
    this.bookForm = this.fb.group({
      title: ['',Validators.required],
      isbn: ['',Validators.required],
      author: ['',Validators.required]
    })
  }

  submit() {
    if (this.bookForm.valid) {

      const newBook =  this.bookForm.value;
      // if(this.bookForm.get('author')?.value.lenght<5){
      //   console.log('Chưa thỏa mãn')
      //   this.errorMessage ='Tên tác giả phải nhiều hơn 5 kí tự!';
      //     setTimeout(() => {
      //       this.errorMessage ='';
      //     }, 3000);
      // }
      this.bookService.createBook(newBook).subscribe(
        (response) => {
          console.log('Sách đã được thêm:', response);
          this.successMessage ='Sách đã được thêm thành công';
          this.bookForm.reset();
          setTimeout(() => {
            this.successMessage ='';
          }, 3000);
        },
        (error) => {
          console.error('Lỗi khi thêm sách:', error);
          this.errorMessage ='Sách không hợp lệ!';
          setTimeout(() => {
            this.errorMessage ='';
          }, 3000);
        }
      );
    } else {
      console.log('Form không hợp lệ')
    }
  }
}