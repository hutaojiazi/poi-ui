import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/ChatService';
import { AuthenticationService } from '../services/AuthenticationService';
import { IncomingMessage } from '../models/incomingmessage.model';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  webSocketEndPoint: string = 'http://localhost:8099/chat';
  topic: string = "/topic/messages";
  stompClient: any;
  message: string;
  messages: IncomingMessage[] = [];

  constructor(
    private chatService: ChatService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.connect();
  }

  sendMessage() {
    this.stompClient.send("/app/message", {}, JSON.stringify(new Message(this.getUsername(), this.message)));
    this.message = '';
  }

  connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame: any) {
        _this.stompClient.subscribe(_this.topic, function (response: any) {
            _this.processMessage(JSON.parse(response.body));
        });
    }, this.reconnect);
  };

  disconnect() {
      if (this.stompClient !== null) {
          this.stompClient.disconnect();
      }
      console.log("Disconnected");
  }

  reconnect(error: any) {
      console.log("Something went wrong. reconnecting." + error);
      setTimeout(() => {
          this.connect();
      }, 5000);
  }

  processMessage(message: IncomingMessage) {
      this.messages.push(new IncomingMessage(message.from, message.text, message.time));
  }

  getUsername(): string {
    const { name } = this.authenticationService.getCurrentUser();
    return name ? name : 'Guest';
  }

}
