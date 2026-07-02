import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-angular');
  name = "yead"
  changeTitle() {
    this.title.set('new title');
  }
  changeName() {
    this.name = "yead1";
  }
}
