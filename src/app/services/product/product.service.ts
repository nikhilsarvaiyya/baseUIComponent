import { Injectable } from '@angular/core';
import { Product } from './product';
import { RestApiSettingService } from '../rest-api-setting.service';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  socket : any;
  constructor(private restApi: RestApiSettingService) { }

  setupSocketConnection() {
    this.socket = io(environment.REST_API);
  }

  // Get all Cards
  GetAllProduct() {
    console.log("GetAllProduct")
    return this.restApi.getCall('/product')
  }

  // Add
  AddProduct(data: Product) {
    console.log("AddProduct")
    return this.restApi.postCall('/add-product', data)
  }

  // Get single object
  GetProduct(id: any) {
    console.log("GetProduct",id)
    return this.restApi.getSingleItemCall("/read-product/" + id)
  }

  // Update
  updateProduct(id: any, data: any) {
    console.log("updateProduct")
    return this.restApi.putCall('/update-product' + id, data)
  }

  // Delete
  deleteProduct(id: any) {
    console.log("deleteProduct")
    return this.restApi.deleteCall('/delete-product/' + id)
  }

  seedData(data:Product){
    console.log(data)
    return this.restApi.postCall('/seed-product', data)
  }

}
