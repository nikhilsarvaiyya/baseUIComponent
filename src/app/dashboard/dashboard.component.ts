import { Component, OnInit } from '@angular/core';
import * as routeData from '../../assets/json/items.json'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  components = (routeData as any).default; 

  
}
