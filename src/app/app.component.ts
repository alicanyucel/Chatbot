import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: { text: string, sender: string }[] = [];
  userInput: string = '';

  constructor(private chatService: ChatService) {}
// hatalar var
  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, sender: 'user' });
      this.chatService.getBotResponse(this.userInput).subscribe(response => {
        this.messages.push({ text: response, sender: 'bot' });
      });
      this.userInput = '';
    }
  }
}
