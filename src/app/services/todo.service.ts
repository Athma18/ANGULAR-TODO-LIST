import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskList: { id: number, name: string }[] = [];
  editIndex: number | null = null;

  addTask(task: string) {
    if (task.trim() !== '') {
      this.taskList.push({ id: this.taskList.length + 1, name: task });
    }
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((item) => item.id !== id);
    this.updateSN();
  }

  editTask(index: number) {
    this.editIndex = index;
  }

  updateTask(task: string) {
    if (this.editIndex !== null && task.trim() !== '') {
      this.taskList[this.editIndex].name = task;
      this.editIndex = null;
    }
  }

  updateSN() {
    this.taskList = this.taskList.map((task, index) => ({
      id: index + 1,
      name: task.name
    }));
  }
}
