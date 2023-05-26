import { Component } from '@angular/core';
// import * as routeData from '../../../assets/json/items.json'
import dummyObj from 'src/assets/script/dummyObj';
import tableObj from 'src/assets/script/tableObj';
import { Location } from '@angular/common';

import { FormCardService } from 'src/app/services/form-card/form-card.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  show = -1;
  components :any = null;
  routePath : any = '';
  routeName: any = ''

  allRoutes : any = []
  constructor(private location: Location,
    private fcservice: FormCardService) {
    this.routeName = this.location.path().split('/')[3]
  }

  ngOnInit() {
     this.fcservice.GetCards().subscribe((data )=>{
      this.components = data?.response?.data;
      let m = this.location.path().split('/')[2]
    this.sideMenu(m as any)
      console.log(this.components)
      console.log(dummyObj)
    });
    
   }

  showsubmenu(index: any) {
  }

  ngAfterCiewChecked() {

  }

  ngAfterContentChecked() {
    
  }

  sideMenu(value: any) {
    switch (value) {
      case 'ui':
        // this.components = dummyObj
        this.routePath = "design/ui"
        break;
      case 'table':
        // this.components = tableObj
        this.routePath = "design/table"
        break;

      default:
        break;
    }
  }

}
