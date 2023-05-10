import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { htmlCodeFormatter, cssCodeFormatter,jsCodeFormatter } from '../../../utility/codeFormatter';
import { createDynamicStyle } from 'src/app/utility/dynamicStyle';
import { createDynamicScript } from 'src/app/utility/dynamicScript';

import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  getSelectedComponentDetail: any = {}
  getParentComponentDetail: any = {}
  codeData: any = [];
  getListId : any = ''
  getDetailId : any = ''
  htmlCodeFormatter = htmlCodeFormatter;
  cssCodeFormatter = cssCodeFormatter;
  jsCodeFormatter=jsCodeFormatter;
  createDynamicStyle=createDynamicStyle;
  createDynamicScript=createDynamicScript;

  constructor(private location: Location,private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.getSelectedComponentDetail = this.location.getState()
    this.getParentComponentDetail = this.location.getState()
    this.getParams()
    this.codeAccordian()
    this.createDynamicStyle(this.getSelectedComponentDetail.componentData['css'] as any)
    this.createDynamicScript(this.getSelectedComponentDetail.componentData['js'] as any)
    
    
  }

  getParams(){
    this.getListId = this.route.snapshot.paramMap.get('listId')
    this.getDetailId = this.route.snapshot.paramMap.get('detailId')
  }

  codeAccordian() {
    this.codeData = []

    for (let key in this.getSelectedComponentDetail.componentData) {
      console.log('key: ' + key + ',  value: ' + this.getSelectedComponentDetail.componentData[key]);
      switch (key) {
        case 'name':
          break;
        case 'html':
          this.codeData.push({title : "HTML", value: this.htmlCodeFormatter(this.getSelectedComponentDetail.componentData[key]) })
          break;
        case 'css':
          this.codeData.push({ title : "CSS", value: this.cssCodeFormatter(this.getSelectedComponentDetail.componentData[key]) })
          break;
        case 'js':
            this.codeData.push({title : "JS", value: this.jsCodeFormatter(this.getSelectedComponentDetail.componentData[key]) })
            break;
        default:
          this.codeData.push({ title : "Others", value: this.getSelectedComponentDetail.componentData[key] })
          break;
      }
    }
    return this.codeData
  }

}
