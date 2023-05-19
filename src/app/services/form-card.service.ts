import { Injectable } from '@angular/core';
import { Card } from './form-card';
import { RestApiSettingService } from './rest-api-setting.service';
@Injectable({
  providedIn: 'root'
})
export class FormCardService {

  constructor(private restApi: RestApiSettingService) { }

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
    console.log("asdasd")
    return this.restApi.postCall('/add-card', data)
  }

  // Get single object
  GetCard(id: any) {
    return this.restApi.getSingleItemCall("/read-card/" + id)
  }

  // Update
  updateCard(id: any, data: any) {
    return this.restApi.postCall('/update-card/' + id, data)
  }

  // Delete
  deleteCard(id: any) {
    return this.restApi.deleteCall('/delete-card/' + id)
  }

}
