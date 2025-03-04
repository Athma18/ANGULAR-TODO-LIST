import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ListComponent } from '../list/list.component';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonComponent, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'fjrkfj';
  task: string = '';

  constructor(public todoService: TodoService) {}

  get editIndex() {
    return this.todoService.editIndex;
  }

  addTask() {
    this.todoService.addTask(this.task);
    this.task = '';
  }
  deleteTask(id: number) {
    this.todoService.deleteTask(id);
  }
  editTask(index: number) {
    this.task = this.todoService.taskList[index].name;
    this.todoService.editTask(index);
  }


  updateTask() {
    if (this.todoService.editIndex !== null) {
      this.todoService.updateTask(this.task);
      this.task = '';
    }
  }

 

 
}
