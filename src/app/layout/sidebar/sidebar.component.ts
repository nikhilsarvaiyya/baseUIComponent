import { Component } from '@angular/core';
import * as routeData from '../../../assets/json/items.json'
import dummyObj from 'src/assets/script/dummyObj';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  components = dummyObj ||  (routeData as any)?.default; 

  
}
