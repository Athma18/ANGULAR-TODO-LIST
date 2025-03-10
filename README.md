
//installation 

1. npm install - g @angular/cli
2. ng new myNewApp
3. cd myNewApp
4. ng serve
5. ng generate component component_name
   ng generate service service_name
   ng generate directive directive_name


6. ng generate component Example
7. example.component.ts  ---->
          export class ... any content

8. app.component.ts --->
         imports:[add ExampleCompoents]  

9. app.component.html
           add content
           call example component
             <app-example></app-example> 
    
10. example.component.html
       add any content

11. ng serve --open


//////////////////////////////////

//rounting

{
    path:'', component:Applecompoent

},
{
    path:'dashboard',component:dashboardcompoent
}

//addcomponent.html
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>

//One way data binding
  1. string interpolation - data from component to view, ts to html {{}}

  2. Property Binding - data from component- view , ts to html
  html tagil attributel set cheyyunath - []
  eg img

  html ->  <img alt="item" [src]="itemImageUrl">
  ts -> itemImageUrl=".///jkjf"



  3. Event Binding - data from view - component , html to ts
  eg:button click 
  <button (click)="onSave()"> Save </button>
  ($event) syntax to bind 

  4. event binding using values pass , taking values from input box
    //i) using value pass
     //  button - clear -- (click)="clearbtn('clear the data')"

     //    ts-- >
            call funct-- clearbtn(data:any){
                alert(data)
            }

//TWO WAY DATA BINDING

 //1. combining property binding[] with event binding() with ngModel makes 2 way data binding


   
  //Counter app

  1. html
    p tag il 0 // p il {{counter}}
    button - increment - (click)="increment()"

  2. ts
    variable to store value - counter:number=0
    function call - increment(){
        this.counter++
    }  


    // To do list 

    1. html poyit- button with function click - modal for input 

    2. input value store aavan variable in ts , store 

    3. print it as list using ngFor directive



TENPLATE REFERENCE VARIABLE

#ref variable


//Decoratives

//to share data between components

@Input()
@Output()


/////
@if 
@else if
@else



////////////////////////////////////////////////

1. Two way data binding (ngModel)

  view <--data passed --> componets

  eg: <input [(ngModel)]="name" />
      <p>{{name}}</p>

2. ngIf
   ngFor
   ngSwitch

////////////////////////////////
Bootstrap implementation

1. npm install bootstrap
2. @import 'bootstrap/dist/css/bootstrap.css'; 




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
track - uniquely identify list using id


///data passing from parent to child component 
  1.@Input()


  /// from child to parent 
  2. @Output() decorator and EventEmitter

  event emitter is smthing that have the capacity to propogate data from child to parent





///Services

//is a class with specific purpose

//share data among multiple component
//implememt appli logic
//external interaction - db connection


//install

 1. ng g s name_of_service
 2. higherarchical DI
 3. register service
 4. in spp.ts-> include service in providers array
 5. also import
 6. ngOnInit
 7.  

 @Injectable Decorator -if we want to inject a service into another service , we must have , injectable decorator

 this decoratoer will tell angular it itself have injected dependencies


 @compoenents have compoent decorator that make angular know it might have depedency and use

 //////////////////////


 //import CommonModule, Component, EventEmitter, Input, Output from '@angular/core';
//Common module is for using ngFor , ngIf - directives
//Compoents- standalone property - no need for ngModule


 //Why service required
 eg:display list
 app module -- app component
 app html --employee list component
 empl list cpmponent ts - array of employee, id, name, age
 empl list ts..--> templatl = ngfor display list

 // in a seperate view display details of each list

 create employee detail component
 ts, -- ngfor  display id , name , age

 but in class we dont have employee array , 


 //code principles
 ----------------------
 Donot repeat yourself
 single responsible principle


 ///////////////

 1.ng generate service services/Todo
 2. from totdolist compoent ts take all states and paste on servic
 3. copy all functions and save in services after constructor
4. in todolist compon , in providers include services
5. in home ts , add inject in angular/core import 
import {Component, inject} from '@angular/core';
6.  







//@Injectable decorators - 
//if we want to inject a service into another service , we must have , injectable decorator
/////to mark a service as injectable


//injectinga service in constructor of the component

//parameters of service type added in component constructor


// Providers - to register dependencies(services)
//Forms-Module - handle userinputs through forms
//Injectible -  which means it can be injected as a dependency into other components
//component import -
//ng Class- to use multiple classes , - like when need to style differently on diff conditions.
//ngModel- to bind data to form fields


////////////////////////////////////

COMPONENTS AND LIFE CYCLE HOOKS IN ANGULAR
////////////////////////

Component is the basic building block of angular application..

1.ng g c comonet-name
2. compoment made of 3 main files ,,.. 
  // .ts file, .html , .css ,


  //////////////////////////
  LifeCycle Hooks - are special functions in angular that executes automatically at different phases of a component life cycle
  -----------------
1. ngOnInit() - initialization logic , executes after compoenent creation

2. ngOnChange() - detect input prperty changes - whenever @Input() changes

3. ngOnDestroy() - used to cleanup , called before component is destroyed

4. ngDoCheck() - it detects changes manually

//////////////////////////////

  Structural and Attribute Directives
  -----------------------------------
Directives are classes that allows us to add or modify behavior of elements . 


//structural directives- manipulate dom , add, delete , replace elements .
Build in structural directives - 
    *ngIf , *ngFor , *ngSwitch

    features:
     1, control rendering
     2, iteration
     3, altering dom layout


     ngIf- conditionally include or remove emenets

     ngFor- ngFor ="let item of items"

     ngSwitch - 


//<div *ngIf="showExample">
    <p>Programming Languages:</p>
    <div *ngFor="let item of items">
         <li>item</li>
      </div>

      <div [ngSwitch]="status">
      <p *ngSwitchCase="'active'">status :active </p>
       
      </div>  


//attribute directive - modify appearance or behavior of elements .  used within html tags

used for dynamic styling

3 built in Attribute directives

1.ngClass -
2.ngStyle -
3.ngModel -



//Dependency Injection 
-------------------------
it is a pattern that allows compoents to access necessary services without creating themselves

//Services
---------------
are reusable classes taht provides logic and data to compoennts, that can be used in multiple components
it will seperate app data and functions so they can be used by multipple components..

//
//GENERICS
--------------------

used to create components that work with any data types

Identity Function- is a function that returns back whatever is passed in.

without generics - type-any or any one type
we lose information about data type

generic solve by using type variable
--------------------

function identity<Type>(arg:Type): Type{
  return arg;
}

this Type allow us to capture the type the user provides and check if the type similar of return type

we can call generic function in 2 ways
1. with  <> angle bracket


2. without type 


//working with generic type variables
----------------------------------------


/////////////////////////////

//Decorators
---------------

In angular, decorators are imp for defining and configuring various application elements,

decorators are functions that are used to modify the behavior of classes and their members.

decorators are used to define components , services , directives 


   types of decorators
   ---------------------

   1. Class decorators - 
             class decorators are applied to clases to modify their behavior or metadata. the examples 
                  1. @Component - to define meta data , style, templates, selectors , imports
                  2. @Directive -
                  3. @NgModule
   2. Property decorators
              property decorators are applied to class properties , used to modify properties within class
                1.@Input
   3. Method Decorators -
         method decorators are applied to class methods.

   4. Parameter Decorators





//Enum -
a special data type
holds set of constant
---------------

enum allows to define a set of named constants.
allows to store a set of constants with associated values.




1. Numeric enums - by default enum initialize first value to 0 and add 1 to each additional values

2. String enums
3. Heterogeneous enums


 enum Direction{
  up=1,
  dowm,
  left,
  right
 }


 ///////////////////////

 Union Types
 -------------

 functio  union(id: (string | number)) {
  console.log(id);

 allowa build new types out of existing types

 A union type is a type formed from 2 or more existig types


 ///////////////////////
 Intersection Type - &
 -----------------
combine multiple types into one , 
represented by & symbol

///////////////
Utility Types
---------------

prebuild functions that transform existing types  into new variant types , making code cleaner and easy to maintain

a function that take existing types as parameters and return new types based on certain rules of transformation


Utility Types (Partial<>, Readonly<>, Pick<>, etc.)


1.Partial<> 
    this utility type takes a type and makes all its properties optional
this is useful in forms and api s where all fields are not required

interface User{
  id:number;
  name:string;
  email:string;
}

const updateUser=(user:partial<User>)=>{
  console.log(Updating user: ${user.name})
}
updateUser({name:'alice})


2.Required<>
------------------

all properties of provided type set is set to required.


3.Readonly<>
------------------

create a type where all properties are read only.

4. Pick<>
---------------------

construct a type by picking a set of properties from a existing type


/////////////////////////////////////////
Type Inference
----------------

the process by which typescript automatically determines the type of a variable or func ,\

Interfaces
------------------

interfaces define the structure of objects by specifying property types and method signature

Type 
------------
it is responsible for ensuring correctness of data types before they used in programs

type jfjc={
  name:string;
  age:number;
}


Any Type
Build in Type
User Defined Type



interfaces define the structure of objects
generics -used to create components that work with any data types
decorators are used to define components , services , directives 
Enum -a special data type holds set of constant
union-(string | number)
intersection-(string & number) - combine multiple types into one 
utility types- prebuild functions that transform existing types  into new variant types 
create a type where all properties are read only.


Directives are classes that allows us to add or modify behavior of elements . 

interface Car {
  make: string;
  model: string;
  mileage?: number;
}
            
let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};

console.log(myCar);



Components & Lifecycle Hooks
Data Binding (Interpolation, Property, Event, and Two-way Binding)
Directives (Structural & Attribute)
Dependency Injection & Services

Interfaces, Types, and Type Inference
Generics
Decorators (important for Angular)
Enums, Union & Intersection Types
Utility Types (Partial<>, Readonly<>, Pick<>, etc.)


//////////////////////////////////////////
BootSTRAP Implementation
--------------------------
1.npm install bootstrap
2.  -> angular.json 
 add ...
    "styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.scss"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]

// angular MATERIAL INSTALL
--------------------------

1. ng add @angular/material
2. 










///////////////////
TEMPLATE DRIVEN FORMS
-------------------------------------
using angular directives ngModel 

1. create input firlds -textbox in form tag
2. directives are used to bind data to form fields
    #anyvariable ="ngForm" 
    (ngSubmit)="onSubmit(form)"

3. form fields are bound to the form using ngModel directive
      #name="name" [(ngModel)]=user.name
      #email="email"
ts. file
4. user:any={
  name:'',
  email:'',
}
onsubmit() -- 
if !valid -fill all field

every()- true if all element matches the condition

parameters- currentvalue, index,array

array.every(num=>num >0)

==> numbers dont have length property

//////////////////////////////
REACT FORMS
---------------------

Uses FormGroup and FormControl in ts.
easy for dynamic form control handling

1.import raectiveformsmodule
2.import formsbuilder - hrlp to generate schema
inside constructor privte fb
3.schema generated 
group il shcmea generate

4.to build a relation between ts and html
   use directive named  [formgroup]="schema name" thst is userForm

5. to identify form fields we use directive form controlname
#name="name" [formControlName]="name"


1. bind form to form group
2. formgroup holds multiple form fields and tract validity , values etc

3. it connect html form with ts class

4.formControlName=

4.ts. file

userform= neq FormGroup({
  name: new FormControl('',validators)
})




















   






































  













