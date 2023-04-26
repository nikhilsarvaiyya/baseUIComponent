import { Component } from '@angular/core';
import * as routeData from '../../../assets/json/items.json'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  components = (routeData as any).default; 

  
}
