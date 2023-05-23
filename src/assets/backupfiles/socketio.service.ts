import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket : any;
  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.REST_API);
  }
}
