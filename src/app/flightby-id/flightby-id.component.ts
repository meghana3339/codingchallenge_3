import { Component } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Flight } from '../flight';
 
@Component({
  selector: 'app-flight-byid',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './flightby-id.component.html',
  styleUrl: './flightby-id.component.css'
})
export class FlightbyIdComponent {
  flightId?: number = 0;
  flight: Flight;
  errMsg: string = '';
  isFlightExist: boolean = false;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.flight = new Flight();
 
    this.activateRoute.params.subscribe((p) => (this.flightId = +p['pid']));
    console.log(this.flightId);
    this.search();
  }
 
search() {
  this.http
    .get<Flight>(
      'http://localhost:5062/api/Flight/GetFlightById?flightId=' + this.flightId,this.httpOptions
    )
    .subscribe((response) => {
      console.log(response);
      if (response != null) {
        this.flight = response;
        this.isFlightExist = true;
        this.errMsg = '';
      } else {
        this.errMsg = 'No Flight Exist For Given Id';
        this.isFlightExist = false;
      }
    });
}
edit() {
  this.http
  .put('http://localhost:5062/api/Flight/EditFlight' + this.flightId, this.flight, this.httpOptions)
  .subscribe((response) => {
    console.log(response);
    this.roter.navigateByUrl('admindashboard/getallflights');
  });
}

}
 