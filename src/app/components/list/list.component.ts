import { Component, OnInit, AfterContentChecked, Inject, Injectable } from '@angular/core';
// import * as data from '../../../assets/json/items.json'
import { htmlCodeFormatter, cssCodeFormatter } from '../../utility/codeFormatter';
import { ActivatedRoute } from '@angular/router'
import { createDynamicStyle } from 'src/app/utility/dynamicStyle';
import dummyObj from 'src/assets/script/dummyObj';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  items = (dummyObj as any);
  selectedComponent: any = {}

  htmlCodeFormatter = htmlCodeFormatter;
  cssCodeFormatter = cssCodeFormatter;
  createDynamicStyle = createDynamicStyle
  getListId: any = ''

  
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log(this.items)
    this.updateComponent()
    this.setData()
   
    
  }

  updateComponent() {
   this.getParams()
    this.selectedComponent =this.items?.find((x: any) => x.path == this.getListId);
  }

  getParams(){
    this.getListId = this.route.snapshot.paramMap.get('listId')
  }

  setData() {
    let mergeCSS = []
    for (let index = 0; index < this.selectedComponent?.data?.length; index++) {
      mergeCSS.push(this.selectedComponent.data[index].css)
    }
    this.createDynamicStyle(mergeCSS as any)
   
  }

  ngAfterCiewChecked() {
    
  }

  ngAfterContentChecked() {
    this.setData()
    this.updateComponent()
   
  }

}
