import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
private broadCastMessages = new BehaviorSubject<object>({});
broadCast = this.broadCastMessages.asObservable();
  constructor() { }

  updateMessage(newMessage: object){
    console.log("new message received: ", newMessage)
    this.broadCastMessages.next(newMessage);
  }
}
