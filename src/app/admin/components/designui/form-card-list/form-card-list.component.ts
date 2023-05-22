import { Component, OnInit } from '@angular/core';
import { FormCardService } from 'src/app/services/form-card.service';
import { SocketioService } from 'src/app/services/socketio.service';
@Component({
  selector: 'app-form-card-list',
  templateUrl: './form-card-list.component.html'
})
export class FormCardListComponent implements OnInit {
  cardList: any = []
  setSingleItem: any = null;
  title = 'socketio-angular';

  constructor(private fcservice: FormCardService, private socketService : SocketioService ) { }

  ngOnInit(): void {
    this.cardList = this.fcservice.GetCards();
    this.socketService.setupSocketConnection();
  }

  selectItem(data: any) {
    this.fcservice.GetCard(data._id).subscribe((data) => {
      this.setSingleItem = data
    })
  }

  deleteItem(data: any) {
    this.fcservice.deleteCard(data._id).subscribe((data) => {
      
    })
  }
  updateItem(data: any) {
    
    
    // this.fcservice.updateCard(data._id,data).subscribe((data) => {
    //   console.log(data)
    // })
  }
}
