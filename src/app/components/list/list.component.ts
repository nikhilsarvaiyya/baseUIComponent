import { Component, OnInit, AfterContentChecked, Inject, Injectable } from '@angular/core';
import * as data from '../../../assets/json/items.json'
import { htmlCodeFormatter, cssCodeFormatter } from '../../utility/codeFormatter';
import { ActivatedRoute } from '@angular/router'
import { createDynamicStyle } from 'src/app/utility/dynamicStyle';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  items = (data as any).default;
  selectedComponent: any = {}

  htmlCodeFormatter = htmlCodeFormatter;
  cssCodeFormatter = cssCodeFormatter;
  createDynamicStyle = createDynamicStyle
  routeName: any = ''

  title = 'dyncss';
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.updateComponent()
    this.setData()
  }

  updateComponent() {
    this.routeName = this.route.snapshot.paramMap.get('type')
    this.selectedComponent = this.items.find((x: any) => x.path == this.routeName);
  }

  setData() {
    let mergeCSS = []
    for (let index = 0; index < this.selectedComponent.data.length; index++) {
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
