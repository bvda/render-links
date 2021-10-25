import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({ 
    text: new FormControl('')
  })

  messages: string[] = []

  onSubmit() {
    this.messages.push(this.form.value.text)
  }
}
