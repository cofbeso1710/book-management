import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router 
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.http.post('http://210.211.96.129:8777/api/user/login', loginData).subscribe(
        (response: any) => {
          console.log('Đăng nhập thành công:', response);
          localStorage.setItem('authToken', response.token); 
          this.router.navigate(['home']); 
        },
        (error) => {
          console.error('Đăng nhập thất bại:', error);
          this.errorMessage = 'Tên đăng nhập hoặc mật khẩu không đúng';
        }
      );
    } else {
      this.errorMessage = 'Vui lòng nhập đầy đủ thông tin';
    }
  }
}
