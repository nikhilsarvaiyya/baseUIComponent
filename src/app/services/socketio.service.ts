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
    //console.log("environment.SOCKET_ENDPOINT",io(environment.SOCKET_ENDPOINT))
    this.socket = io(environment.SOCKET_ENDPOINT);
  }
}
