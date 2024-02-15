import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Flight } from '../flight';
 
@Component({
  selector: 'app-getall-flights',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './getall-flights.component.html',
  styleUrl: './getall-flights.component.css'
})
export class GetallFlightsComponent {
  flights: Flight[]=[];
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router){
 
    this.getAllFlights();
  }
  getAllFlights() {
     
    this.http
    .get<Flight[]>('http://localhost:5062/api/Flight/GetAllFlights',this.httpOptions)
    .subscribe((response) =>
    {
            this.flights = response;
            console.log(this.flights);
           
    });
 
    }
  }


