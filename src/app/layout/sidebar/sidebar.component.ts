import { Component } from '@angular/core';
// import * as routeData from '../../../assets/json/items.json'
import dummyObj from 'src/assets/script/dummyObj';
import tableObj from 'src/assets/script/tableObj';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  show = -1;
  components :any = null;
  routePath : any = '';
  routeName: any = ''
  constructor(private location: Location) {
    this.routeName = this.location.path().split('/')[3]
  }

  showsubmenu(index: any) {
  }

  ngAfterCiewChecked() {

  }

  ngAfterContentChecked() {
    let m = this.location.path().split('/')[2]
    this.sideMenu(m as any)
  }

  sideMenu(value: any) {
    switch (value) {
      case 'ui':
        this.components = dummyObj
        this.routePath = "design/ui"
        break;
      case 'table':
        this.components = tableObj
        this.routePath = "design/table"
        break;

      default:
        break;
    }
  }

}
