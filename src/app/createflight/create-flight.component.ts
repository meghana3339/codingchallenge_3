import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Flight } from '../flight';

@Component({
  selector: 'app-create-flight',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './create-flight.component.html',
  styleUrl: './create-flight.component.css'
})
export class createFlightComponent {
  flights: Flight;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.flights = new Flight();
  }
  addFlight() {
    const currentTime = new Date();
  const departureTime = new Date(this.flights.departureDateTime ?? '');
  const arrivalTime = new Date(this.flights.arrivalDateTime ?? '');

  
  if (departureTime <= currentTime || arrivalTime <= currentTime) {
    console.log("Departure and arrival times must be in the future.");
    
    return;
  }
    console.log(this.flights);
    this.http
      .post('http://localhost:5062/api/Flight/CreateFlight', this.flights,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('admin-dashboard/getall-flights');
  }

}

