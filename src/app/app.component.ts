import { Component } from '@angular/core';
 import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoService } from './services/todo.service';
import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[TodoService]
})
export class AppComponent {
  
 title="hi"



}
