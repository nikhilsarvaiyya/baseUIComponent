import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  list : any = [{
    title:"Components",
    path:"component/page/dashboard",
    description:"Component Details"
  },{
    title:"Design",
    path:"design/page/dashboard",
    description:"Component Details"
  },{
    title:"Table",
    path:"table/page/dashboard",
    description:"Table Details"
  }]
}
