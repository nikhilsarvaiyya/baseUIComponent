import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormCardService } from 'src/app/services/form-card/form-card.service';
import { FormCardDetailService } from 'src/app/services/form-card-detail/form-card-detail.service';
import { SocketioService } from 'src/assets/backupfiles/socketio.service';
import { ToastService } from 'src/app/comman/toast/toast.service';
import { ConfirmationDialogService } from 'src/app/comman/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-form-card-list-table',
  templateUrl: './form-card-list-table.component.html'
})
export class FormCardListTableComponent implements OnInit {
  @Output() updateItemEvent = new EventEmitter<string>();

  cardList: any = []
  setSingleItem: any = null;
  page = 1;

  constructor(private fcservice: FormCardService,
    private fcdservice: FormCardDetailService, private socketService: SocketioService,
    private toastService : ToastService,
    private confirmationDialogService: ConfirmationDialogService) { }

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

    this.confirmationDialogService.confirm('Please confirm', 'Do you really want to delete '+data.title+' ?')
    .then((confirmed) => {
      if(confirmed){
        this.fcservice.deleteCard(data._id).subscribe((data) => {
          console.log(data)
          this.toastService.show(data.msg ,
            { classname: data.delete ?'bg-success text-light' : 'bg-danger text-light', delay: 3000 }
          );
        })
      }
    })
    .catch(() => '');

    
  }

  updateItem(data: any) {
    this.updateItemEvent.emit(data);
  }

}

