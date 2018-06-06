import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the Cypress-Cucumber demo';
  input = '';
  output = '';

  doStuff(event) {
    console.log('Doing stuff!');
    this.output = this.input;
  }
}
