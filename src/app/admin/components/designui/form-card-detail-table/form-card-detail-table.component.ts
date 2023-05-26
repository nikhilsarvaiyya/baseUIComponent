import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormCardDetailService } from 'src/app/services/form-card-detail/form-card-detail.service';
import { SocketioService } from 'src/assets/backupfiles/socketio.service';
@Component({
  selector: 'app-form-card-detail-table',
  templateUrl: './form-card-detail-table.component.html'
})
export class FormCardDetailTableComponent implements OnInit {
  @Output() updateItemEvent = new EventEmitter<string>();

  cardList: any = []
  setSingleItem: any = null;
  page = 1;

  constructor(private fcdservice: FormCardDetailService, private socketService: SocketioService) { }

  ngOnInit(): void {

    this.fcdservice.GetCardsDetails().subscribe((data) => {
      this.cardList = data?.response;
    });
    this.socketService.setupSocketConnection();
  }

  selectItem(data: any) {
    this.fcdservice.GetCard(data._id).subscribe((data) => {
      this.setSingleItem = data
    })
  }

  deleteItem(data: any) {
    this.fcdservice.deleteCard(data._id).subscribe((data) => { })
  }

  updateItem(data: any) {
    this.updateItemEvent.emit(data);
  }

}


