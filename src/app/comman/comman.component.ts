import { Component, OnInit, AfterContentChecked } from '@angular/core';
import * as data from '../../assets/json/items.json'
import { htmlCodeFormatter, cssCodeFormatter } from '../utility/codeFormatter';
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-comman',
  templateUrl: './comman.component.html',
  styleUrls: ['./comman.component.css']
})
export class CommanComponent {
  styleUrl : string = './comman.component.css';

  items = (data as any).default;
  selectedComponent: any = {}

  htmlCodeFormatter = htmlCodeFormatter;
  cssCodeFormatter = cssCodeFormatter;

  routeName: any = ''

  constructor(private route: ActivatedRoute,public sanitizer: DomSanitizer) {
   
  }

  ngOnInit(): void {
   
  }
  
  setData() {
    this.routeName = this.route.snapshot.paramMap.get('type')
    this.selectedComponent = this.items.find((x: any) => x.path == this.routeName);
  }

  ngAfterContentChecked(){
    this.setData()
    this.changeCSSStyle()
  }

  changeCSSStyle() {
    console.log(this.styleUrl)
    //this.styleUrl = (this.styleUrl === './comman.component.css') ? '../dashboard.component.css' : './comman.component.css';
  }

}
