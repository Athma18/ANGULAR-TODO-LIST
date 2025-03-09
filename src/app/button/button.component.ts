import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { TodoService } from '../services/todo.service';



@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  title="child"
  taskList:{id:number,name:string}[]=[]

  @Input() label: string = 'Button'; 
  @Input() type: 'add' | 'edit' | 'delete' | 'update'= 'add'; 
  @Output() buttonClick = new EventEmitter<void>(); 
         
  constructor(public todoService: TodoService) {}

  handleClick() {

    this.buttonClick.emit(); 
  }

}

