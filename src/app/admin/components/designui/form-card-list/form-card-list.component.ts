import { Component, OnInit } from '@angular/core';
import { FormCardService } from 'src/app/services/form-card.service';

@Component({
  selector: 'app-form-card-list',
  templateUrl: './form-card-list.component.html'
})
export class FormCardListComponent implements OnInit {
  cardList: any = []
  setSingleItem: any = null;

  constructor(private fcservice: FormCardService) { }

  ngOnInit(): void {
    this.cardList = this.fcservice.GetCards();
  }

  selectItem(data: any) {
    this.fcservice.GetCard(data._id).subscribe((data) => {
      this.setSingleItem = data
    })
  }

  deleteItem(data: any) {
    this.fcservice.deleteCard(data._id).subscribe((data) => {
      console.log(data)
    })
  }
  updateItem(data: any) {
    
    
    // this.fcservice.updateCard(data._id,data).subscribe((data) => {
    //   console.log(data)
    // })
  }
}
