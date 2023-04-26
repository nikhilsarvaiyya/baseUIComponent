import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemService {

  private val : any = {}
  constructor() { }

  selectedItem(data: any) {
    this.val = data
  }

  getItem() {
    return this.val;
  }

}
