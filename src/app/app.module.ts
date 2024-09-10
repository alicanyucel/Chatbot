import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Burada düzeltme yaptım
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatbotService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [ChatbotService], //
  bootstrap: [AppComponent]
})
export class AppModule { }