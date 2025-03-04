import { Component } from '@angular/core';
 import {FormsModule} from '@angular/forms';
import { TodoService } from './services/todo.service';
import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[TodoService]
})
export class AppComponent {
  
 title="hi"



}
