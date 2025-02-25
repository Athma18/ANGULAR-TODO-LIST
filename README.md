//define properties in ts file
task="" & tasklist:{id:number,name:string}[]=[]
//create input field and button 
  when added it should be added to the task --so bind input field with task property - use two way binding (ngModel)

//  For using ngModels and all - import Form Controls Module in app.module.ts

//in input tag [(ngModel)]="task" - now both are binded

//now when we change in text field we willget the update in task, if we print {{task}}


//////////////////////////////
for button


//in button click the value from the input field should be added to the task list

1.create a click event in button (click)="addTask()

2.addTask(){
    this.taskList.push({id:this.taskList.length+1,name:this.task})

    console -this.taskList to check...
}

3.now this lists should visible on frontend

@for(task of taskList; track task.id){
  <h1>{{task.name}}</h1>
}


/////////////////////////////////

task=""
list:{id:number,name:string}

input tag  -- 2 way -- [ngModel]=task  -- form control module in app.module.ts --doubt

{{task}}-- optional to check




button (click)="add()"

add(){

  this.list.push({id:this.list.length+1,name:this.list.task})


}

@for(task of list;track task.id){
  <h1>{{task.name}}</h1>
}


///data passing from parent to child component 
  1.@Input()


  /// from child to parent 
  2. @Output() decorator and EventEmitter

  event emitter is smthing that have the capacity to propogate data from child to parent

  













