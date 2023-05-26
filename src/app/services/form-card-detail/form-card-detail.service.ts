import { Injectable } from '@angular/core';
import { CardDetail } from './form-card-detail';
import { RestApiSettingService } from '../rest-api-setting.service';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class FormCardDetailService {
  socket : any;
  constructor(private restApi: RestApiSettingService) { }

  setupSocketConnection() {
    this.socket = io(environment.REST_API);
  }

  // Get all Cards
  GetCardsDetails() {
    return this.restApi.getCall('/menu')
  }

  // Add
  AddCardDetail(data: CardDetail) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaa")
    return this.restApi.postCall('/add-card-detail', data)
  }

  // Get single object
  GetCard(id: any) {
    return this.restApi.getSingleItemCall("/read-card-detail/" + id)
  }

  // Update
  updateCardDetail(id: any, data: any) {
    return this.restApi.putCall('/update-card-detail/' + id, data)
  }

  // Delete
  deleteCard(id: any) {
    return this.restApi.deleteCall('/delete-card-detail/' + id)
  }

}
