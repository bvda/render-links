import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinkifyPipe } from './linkify.pipe';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkifyPipe,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
