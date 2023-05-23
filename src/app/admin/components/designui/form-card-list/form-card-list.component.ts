import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormCardService } from 'src/app/services/form-card/form-card.service';
import { SocketioService } from 'src/assets/backupfiles/socketio.service';
@Component({
  selector: 'app-form-card-list',
  templateUrl: './form-card-list.component.html'
})
export class FormCardListComponent implements OnInit {
  @Output() updateItemEvent = new EventEmitter<string>();

  cardList: any = []
  setSingleItem: any = null;
  page = 1;

  constructor(private fcservice: FormCardService, private socketService: SocketioService) { }

  ngOnInit(): void {

    this.fcservice.GetCards().subscribe((data) => {
      this.cardList = data?.response;
    });
    this.socketService.setupSocketConnection();
  }

  //   getPageFromService(event:any) {
  //     let option = {
  //       page:this.page
  //     }
  //     this.fcservice.GetCards().subscribe((data) => {
  //       this.cardList = data?.response;
  //     });
  // }


  selectItem(data: any) {
    this.fcservice.GetCard(data._id).subscribe((data) => {
      this.setSingleItem = data
    })
  }

  deleteItem(data: any) {
    this.fcservice.deleteCard(data._id).subscribe((data) => { })
  }

  updateItem(data: any) {
    this.updateItemEvent.emit(data);
  }

}
