import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { htmlCodeFormatter, cssCodeFormatter } from '../utility/codeFormatter';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  getSelectedComponentDetail: any = {}
  codeData: any = []
  htmlCodeFormatter = htmlCodeFormatter;
  cssCodeFormatter = cssCodeFormatter;

  constructor(private location: Location) {

  }
  ngOnInit() {
    this.getSelectedComponentDetail = this.location.getState()
    this.codeAccordian()
    this.loadStyle(this.getSelectedComponentDetail.componentData['css'])
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
