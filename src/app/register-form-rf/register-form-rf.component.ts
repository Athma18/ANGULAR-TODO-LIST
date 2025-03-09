import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormControl,FormGroupDirective,NgForm,Validators,FormsModule,ReactiveFormsModule, NgModel, FormBuilder} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormGroup  } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
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
  selector: 'app-register-form-rf,select-overview-example,input-overview-example,input-error-state-matcher-example',
  imports: [ReactiveFormsModule, CommonModule,MatIconModule,MatButtonModule,MatSelectModule,MatCheckboxModule,MatFormFieldModule,MatInputModule],
  templateUrl: './register-form-rf.component.html',
  styleUrl: './register-form-rf.component.css'
})



export class RegisterFormRFComponent {
  userForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass1:['',[Validators.required,Validators.minLength(6)]],
      pass2:['',[Validators.required]],

      phone:['',[Validators.required,Validators.pattern("^[0-9]{10}$") ]],
      gender: ['', [Validators.required]],
      hobbies:[[], [Validators.required]],
      country:['', [Validators.required]]

    },
    { validators: this.passwordMatchValidator }
  );
  this.userForm.get('pass2')?.valueChanges.subscribe(() => {
    this.userForm.updateValueAndValidity();
  });
  }
  get pass1() {
    return this.userForm.get('pass1');
  }

  get pass2() {
    return this.userForm.get('pass2');
  }


  get phoneControl() {
    return this.userForm.get('phone');
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const pass1 = control.get('pass1')?.value;
    const pass2 = control.get('pass2')?.value;
    return pass1 === pass2 ? null : { passwordsMismatch: true };
  }


  onSubmit() {
    console.log('submit button is clicked');
    if (this.userForm.valid) {
      console.log(this.userForm.value); 
    } else {
      console.log("Form is invalid");
    }
  }
  
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

}
