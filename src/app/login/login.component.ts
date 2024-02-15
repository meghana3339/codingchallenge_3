import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  user: User;
  email: string = '';
  password: string = '';
  errMsg: string = '';
  httpResponse: any;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }

  onSubmit(): void {
    let login = { Email: this.email, Password: this.password };
    this.http
      .post('http://localhost:5062/api/User/Validate', login,this.httpOptions)
      .subscribe((response) => {
        this.httpResponse = response;
        console.log(this.httpResponse);
        if (this.httpResponse.token != null) {
          //store token in local storage
          localStorage.setItem('token', this.httpResponse.token);
          localStorage.setItem('userId',this.httpResponse.userId);

          if (this.httpResponse.roleName == 'Customer') {
            this.router.navigateByUrl('customerdashboard');
          } else if (this.httpResponse.roleName == 'Admin') {
            this.router.navigateByUrl('admin-dashboard');
          } 
        } else {
          this.errMsg = 'Invalid Credentials';
          console.log(this.errMsg);
        }
      });
  }
  onRegister(form:NgForm): void{
    this.router.navigateByUrl('register')
  }
  onReset(form: NgForm): void {
    form.reset();
  }

}
