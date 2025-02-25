import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule,ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="fjrkfj";
  task:string="";
  taskList:{id:number,name:string}[]=[]
 
 addTask(){
   if(this.task!="" ){
    this.taskList.push({id:this.taskList.length+1,name:this.task})

    this.task=""
   }
   
 }

 handleAction(action: 'add' | 'edit' | 'delete') {
  if (action === 'add') {
    this.addTask();
  } else if (action === 'edit' && this.editIndex !== null) {
    this.updateTask();
  }
}



 deleteTask(id:number){

  this.taskList =this.taskList.filter((item)=>item.id!=id);

  this.updateSN();




 }
 updateSN() {
  this.taskList = this.taskList.map((task, index) => ({
    id: index + 1,
    name: task.name
  }));
}
editIndex: number | null = null;

editTask(index: number) {

  this.task = this.taskList[index].name; 
  this.editIndex = index; 

}


updateTask() {
  if (this.editIndex !== null && this.task.trim() ) {
    this.taskList[this.editIndex].name = this.task;
      this.editIndex = null; 
   this.task = ""; 
  }
 
}



 }
