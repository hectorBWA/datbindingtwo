import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  first: number = 75;
  second: number = 80;
  sum: number = this.first + this.second;
  max: number = Math.max(this.first, this.second);
}
