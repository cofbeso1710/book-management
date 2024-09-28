import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ){
    this.createForm();
  }

    createForm(){
      this.registerForm = this.fb.group({
        userName: ['', Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }, {
        validators: this.passwordMatchValidator
      });
    }

    passwordMatchValidator(form: FormGroup) {
      return form.controls['password'].value === form.controls['confirmPassword'].value 
      ? null : { 'mismatch': true };
    }

    onSubmit(){
      if(this.registerForm.valid) {
        const registerData ={
          userName: this.registerForm.value.userName,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password
        };
        this.http.post('http://210.211.96.129:8777/api/user', registerData).subscribe(
          (response: any) => {
            console.log('Đăng ký thành công:',response);
            this.router.navigate(['login']);
          },
          (error) => {
            console.error('Đăng ký thất bại:', error);
            this.errorMessage ='Đăng ký không thành công! Vui lòng thử lại.';
          }
        );
      } else {
        this.errorMessage = 'Vui lòng nhập đầy đủ thông tin và xác nhận mật khẩu khớp.';
      }
    }
}
