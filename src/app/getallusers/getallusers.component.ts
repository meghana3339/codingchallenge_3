import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-getallusers',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './getallusers.component.html',
  styleUrl: './getallusers.component.css'
})
export class GetallusersComponent {
  user: User[] = [];
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.getAllusers();
  }
  getAllusers() {
    this.http
      .get<User[]>('http://localhost:5062/api/User/GetAllUsers',this.httpOptions)
      .subscribe((response) => {
        this.user = response;
        console.log(this.user);
      });
  }

}
