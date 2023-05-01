import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import * as routeData from '../../../assets/json/items.json'
import dummyObj from 'src/assets/script/dummyObj';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent{
  components =  dummyObj || (routeData as any)?.default; 
  selectedComponentData : any = {}
  getParentComponentDetail: any = {}
  getPageId : any = ''
  constructor(private route: ActivatedRoute,private location: Location,) {
  }
  
  ngOnInit(): void {
    this.getParams()
    this.selectedData()
    this.getParentComponentDetail = this.location.getState()
  }

  getParams(){
    this.getPageId = this.route.snapshot.paramMap.get('pageId')
  }

  selectedData(){
    this.selectedComponentData = this.components?.find((x: any) => x.path == this.getPageId)?.subTree || this.components;
  }



  ngAfterContentChecked() {
    this.getParams()
    this.selectedData()
  }
  
}
