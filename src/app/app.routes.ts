import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { HomeComponent } from './home/home.component';
import { createFlightComponent } from './createflight/create-flight.component';
import { GetallusersComponent } from './getallusers/getallusers.component';
import { GetallFlightsComponent } from './getall-flights/getall-flights.component';
import { FlightbyIdComponent } from './flightby-id/flightby-id.component';


export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'customer-dashboard',component:CustomerDashboardComponent},
    {path:'home',component:HomeComponent},
    {path:'create-flight',component:createFlightComponent},
    {path:'getallusers',component:GetallusersComponent},
    {path:'getall-flights',component:GetallFlightsComponent},
    {path:'admin-dashboard',component:AdminDashboardComponent,
    children:[
        {path:'getallusers',component:GetallusersComponent},
        {path:'create-flight',component:createFlightComponent},
        {path:'getall-flights',component:GetallFlightsComponent}
    ],},
    { path: 'customer-dashboard', component: CustomerDashboardComponent,
    children: [
        { path: 'getall-flights', component: GetallFlightsComponent },
        { path: 'flightby-id',component:FlightbyIdComponent}
       
    ],},

];

