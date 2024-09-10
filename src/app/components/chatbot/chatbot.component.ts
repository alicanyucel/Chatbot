import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messages: Array<{ text: string, sender: string }> = [];
  userInput: string = '';
  userMessage: any;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, sender: 'user' });
      this.getBotResponse(this.userInput);
      this.userInput = '';
    }
  }

  getBotResponse(userMessage: string) {
    this.http.post<any>('YOUR_API_ENDPOINT', { message: userMessage })
      .subscribe(response => {
        const botResponse = response?.message || 'Yanıt bulunamadı.';
        this.messages.push({ text: botResponse, sender: 'bot' });
      });
  }
}
