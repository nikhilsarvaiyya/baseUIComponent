import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html'
})
export class SubHeaderComponent {
  getSelectedComponentDetail: any = ''

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getSelectedComponentDetail = this.location.getState()
  }

  ngAfterContentChecked() {
    this.getSelectedComponentDetail = this.location.getState()
  }

  toggleView(view : any){
    
  }

  goBack(){
    this.location.back()
  }

}
