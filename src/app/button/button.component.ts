import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input,  Output } from '@angular/core';


//import CommonModule, Component, EventEmitter, Input, Output from '@angular/core';
//Common module is for using ngFor , ngIf - directives
//Compoents- standalone property
@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  title="child"
  @Input() label: string = 'Button'; 
  @Input() type: 'add' | 'edit' | 'delete' | 'update'= 'add'; 
  @Output() buttonClick = new EventEmitter<void>(); 
         
  constructor() {}

  handleClick() {

    this.buttonClick.emit(); 
  }

}
