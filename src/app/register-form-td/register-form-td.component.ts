import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormControl,FormGroupDirective,NgForm,Validators,FormsModule,ReactiveFormsModule, NgModel} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
export interface Task {
  name: string;      
  completed: boolean;
  subtasks?: Task[];
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


interface Food {

  value: string;
  viewValue: string;
}




@Component({
  selector: 'select-overview-example,app-register-form-td,input-overview-example,input-error-state-matcher-example',
  imports: [CommonModule, MatCheckboxModule,FormsModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule,MatButtonModule, MatIconModule, MatSelectModule],
  templateUrl: './register-form-td.component.html',
  styleUrl: './register-form-td.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormTDComponent {
  selected = 'none';
 worderror:boolean=false;
  filltheformerror:boolean=false;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  foods: Food[] = [
    {value: 'F', viewValue: ' Female'},
    {value: 'M', viewValue: ' Male'},
  ];

  readonly task = signal<Task>({
    name: 'Select Your Hobbies:',
    completed: false,
    subtasks: [
      {name: 'Sports', completed: false},
      {name: 'Music', completed: false},
      {name: 'Dance', completed: false},
    ],
  });

  readonly partiallyComplete = computed(() => {
    const task = this.task();
    if (!task.subtasks) {
      return false;
    }
    return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
  });

  update(completed: boolean, index?: number) {
    this.task.update(task => {
      if (index === undefined) {
        task.completed = completed;
        task.subtasks?.forEach(t => (t.completed = completed));
      } else {
        task.subtasks![index].completed = completed;
        task.completed = task.subtasks?.every(t => t.completed) ?? true;
      }
      return {...task};
    });
  }

  user: any = {
    name: '',
    email:'',
    pass1: '',
    pass2: '',
    phone: '',
    gender:'',
    hobbies: {
      main: false,
      subtasks: []
    },
    country:''
  };
 
  
  
  onSubmit(form: any) {

    if (!form.valid) {
      alert('Please fill all fields');
       return;
    }
      if(this.user.pass1.length<6){
      alert("Password must be at least 6 characters long")
      return;
    }
     if(this.user.pass1 !== this.user.pass2){
      alert('Passwords do not match');
      return;
     } 
     if (!this.user.gender) {
      alert('Please select your gender');
      return;
    }
    
     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     if (!emailPattern.test(this.user.email)) {
       alert('Please enter a valid email address');
       return;
     } 

      /*  if(email.invalid){
        alert('Please enter a valid email address');
        return;
       } */
     if (!this.user.hobbies.main && this.user.hobbies.subtasks.every((h: any) => !h)) {
      alert('Please select at least one hobby');
      return;
    }

    if(!this.user.country){
      alert('select a country');
      return;
    }
    
    
    if(String(this.user.phone).length !== 10){
      alert("phone number must be 10 digits long");
      return;

     }
     
      alert('Registration successful');
     
    
    
    
    }

}