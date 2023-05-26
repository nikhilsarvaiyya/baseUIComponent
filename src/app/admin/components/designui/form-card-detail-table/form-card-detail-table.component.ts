import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormCardDetailService } from 'src/app/services/form-card-detail/form-card-detail.service';
import { SocketioService } from 'src/assets/backupfiles/socketio.service';
import { ToastService } from 'src/app/comman/toast/toast.service';
import { ConfirmationDialogService } from 'src/app/comman/confirmation-dialog/confirmation-dialog.service';
@Component({
  selector: 'app-form-card-detail-table',
  templateUrl: './form-card-detail-table.component.html'
})
export class FormCardDetailTableComponent implements OnInit {
  @Output() updateItemEvent = new EventEmitter<string>();

  cardList: any = []
  setSingleItem: any = null;
  page = 1;

  constructor(private fcdservice: FormCardDetailService, 
    private socketService: SocketioService,
    private toastService : ToastService,
    private confirmationDialogService: ConfirmationDialogService) { }

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
    this.confirmationDialogService.confirm('Please confirm', 'Do you really want to delete '+data.title+' ?')
    .then((confirmed) => {
      if(confirmed){
        this.fcdservice.deleteCard(data._id).subscribe((data) => {
          this.toastService.show('Deleted Successfully!',{ classname: 'bg-danger text-light', delay: 3000 });
        })
      }
    })
    .catch(() => '');
  }

  updateItem(data: any) {
    this.updateItemEvent.emit(data);
  }

}


