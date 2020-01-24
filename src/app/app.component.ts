import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do';
  details:String[]=[];
  saveToDo(i:any)
  {
    this.details.push(i);
  }
}
