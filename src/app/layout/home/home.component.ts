import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  list : any = [{
    title:"Components",
    path:"design/ui/page/dashboard",
    description:"Component Details"
  },{
    title:"Table",
    path:"design/table/page/dashboard",
    description:"Table Details"
  }]
}
