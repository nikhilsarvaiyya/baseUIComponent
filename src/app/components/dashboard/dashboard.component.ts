import { Component, OnInit } from '@angular/core';
import * as routeData from '../../../assets/json/items.json'
import dummyObj from 'src/assets/script/dummyObj';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent{
  components =  dummyObj || (routeData as any)?.default; 

  
}
