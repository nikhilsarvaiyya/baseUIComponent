import { Component, OnInit, AfterContentChecked, Inject, Injectable } from '@angular/core';
import * as data from '../../assets/json/items.json'
import { htmlCodeFormatter, cssCodeFormatter } from '../utility/codeFormatter';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-comman',
  templateUrl: './comman.component.html',
  styleUrls: ['./comman.component.css']
})
export class CommanComponent {
  items = (data as any).default;
  selectedComponent: any = {}

  htmlCodeFormatter = htmlCodeFormatter;
  cssCodeFormatter = cssCodeFormatter;

  routeName: any = ''

  title = 'dyncss';
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.updateComponent()
    this.setData()
  }

  updateComponent(){
    this.routeName = this.route.snapshot.paramMap.get('type')
    this.selectedComponent = this.items.find((x: any) => x.path == this.routeName);
  }
  setData(){
   let mergeCSS = []
    for (let index = 0; index < this.selectedComponent.data.length; index++) {
      mergeCSS.push(this.selectedComponent.data[index].css)
    }
    this.loadStyle(mergeCSS)
  }

  ngAfterContentChecked() {
    this.updateComponent()
  }

  loadStyle(data: any) {
    
    let setValues = data.toString().replace("},","}")
    var style_sheet = document.createElement('style');
    if (style_sheet) {
      style_sheet.setAttribute('type', 'text/css');
      var cstr = setValues;
      var rules = document.createTextNode(cstr);
      style_sheet.appendChild(rules);
      var head = document.getElementsByTagName('head')[0];
      if (head) {
        head.appendChild(style_sheet);
      }
    }
  }

}
