import {Component, OnInit} from '@angular/core';
import {Todo} from "./models/todo-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos : Todo[] = [
    {id: 1, title: 'Install Angular CLI', completed: true},
    {id: 2, title: 'Style app', completed: false},
    {id: 3, title: 'Finish service functionality', completed: false},
    {id: 4, title: 'Setup API', completed: false},
    {id: 4, title: 'Test app', completed: false},
  ];
}
