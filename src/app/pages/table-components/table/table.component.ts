import { Component, OnInit } from '@angular/core';
import tableData from 'src/assets/script/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  tableHead : any = [
    {title:""},{title:"Name"},{title:"Age"},{title:"Gender"},{title:"Email"},{title:"Phone"},
  ]
  tableBody : any = []
 
  ngOnInit(){
    this.tableBody = tableData
   
  }
}
