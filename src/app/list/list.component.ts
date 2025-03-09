import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule,ButtonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    constructor(public todoService: TodoService) {}
  

  @Input() taskList: { id: number; name: string }[] = [];

  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<number>();

  
  

  handleDelete(id: number) {
    this.deleteTask.emit(id);

  }

  handleEdit(index: number) {

    this.editTask.emit(index);

    
}  
}
