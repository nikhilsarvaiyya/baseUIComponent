import { Injectable } from '@angular/core';
import { Card } from './form-card';
import { RestApiSettingService } from '../rest-api-setting.service';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class FormCardService {
  socket : any;
  constructor(private restApi: RestApiSettingService) { }

  setupSocketConnection() {
    this.socket = io(environment.REST_API);
  }

  // Get all Icons
  getIcons() {
    return this.restApi.getCall('/icons')
  }
  
  // Get all Cards
  GetCards() {
    return this.restApi.getCall('')
  }

  // Add
  AddCard(data: Card) {
    return this.restApi.postCall('/add-card', data)
  }

  // Get single object
  GetCard(id: any) {
    return this.restApi.getSingleItemCall("/read-card/" + id)
  }

  // Update
  updateCard(id: any, data: any) {
    return this.restApi.putCall('/update-card/' + id, data)
  }

  // Delete
  deleteCard(id: any) {
    return this.restApi.deleteCall('/delete-card/' + id)
  }

}
