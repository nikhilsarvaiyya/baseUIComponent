import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  menu: any = "design"
  myMenus: any = ['design', 'cards']
  
  constructor(private location: Location) {

  }
  toggleTheme = () => {
    return true
  }

  ngAfterCiewChecked() {
    
  }

  ngAfterContentChecked() {
    this.menu = this.myMenus.find((element: any) => element === this.location.path().split('/')[1])
  }



}
