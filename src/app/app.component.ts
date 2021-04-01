import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
})
export class AppComponent {

  message: string;
  name: string;

  async fetchMessage() {
    if (this.name) {
      const response = await fetch('https://rj-azure-function.azurewebsites.net/api/message/', {
        method: 'POST',
        body: JSON.stringify({ name: this.name })
      });
      const responseBody = await response.json();
      this.message = responseBody.message;
      this.name = '';
    }
  }

}
