import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { htmlCodeFormatter, cssCodeFormatter } from '../../utility/codeFormatter';
import { createDynamicStyle } from 'src/app/utility/dynamicStyle';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  getSelectedComponentDetail: any = {}
  codeData: any = []
  htmlCodeFormatter = htmlCodeFormatter;
  cssCodeFormatter = cssCodeFormatter;
  createDynamicStyle=createDynamicStyle;

  constructor(private location: Location) {

  }
  ngOnInit() {
    this.getSelectedComponentDetail = this.location.getState()
    this.codeAccordian()
    this.createDynamicStyle(this.getSelectedComponentDetail.componentData['css'] as any)
    
  }

  codeAccordian() {
    this.codeData = []

    for (let key in this.getSelectedComponentDetail.componentData) {
      console.log('key: ' + key + ',  value: ' + this.getSelectedComponentDetail.componentData[key]);
      switch (key) {
        case 'html':
          this.codeData.push({title : "HTML", value: this.htmlCodeFormatter(this.getSelectedComponentDetail.componentData[key]) })
          break;
        case 'css':
          this.codeData.push({ title : "CSS", value: this.cssCodeFormatter(this.getSelectedComponentDetail.componentData[key]) })
          break;
        default:
          break;
      }
    }
    return this.codeData
  }

}
