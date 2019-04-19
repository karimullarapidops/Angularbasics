import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-test',
  // interpolation
  // template: `<h2>Welcome {{ name }}</h2>
  //            <h2>Welcome {{ name.length }}</h2>
  //            <h2>Welcome {{ name.toUpperCase() }}</h2>
  //            <h2>Welcome {{ greetUser() }}</h2>
  //            <h2>Welcome {{ siteUrl }}</h2>
  //            <input type="text" value="karimulla">`,

  // property binding
  // template: `<h2>Welcome {{ name }}</h2> 
  //           <input [id]="myId" type="text" value="karimulla">
  //           <input bind-disabled="isDisabled" id= "{{ myId }}" type="text" value="karimulla">
            //  `,

    // Class Binding
//     template: `<h2>Welcome {{name}}</h2>
//                 <h2 class="text-success">Karimulla</h2>
//                 <h2 [class]="successClass">Karimulla</h2>
//                 <h2 class="text-special" [class]="successClass" >Karimulla</h2>
//                 <h2 [class.text-danger]="hasError">Karimulla</h2>
//                 <h2 [ngClass]= "messageClasses">Karimulla</h2>`,        
//   styles: [`
//           .text-success {
//             color: green;
//           }
//           .text-danger {
//             color: red;
//           }
//           .text-special {
//             font-style: italic;
//           }
//   `]

// style binding
// template: `<h2>Welcome {{name}}</h2>
//             <h2 [style.color]="hasError ? 'red' : 'green' ">Style binding</h2>
//             <h2 [style.color]="highlightColor">Style Binding 2 </h2>
//             <h2 [ngStyle]="titleStyles">Style Binding 3</h2>`,

// Databinding 
// template: `<h2>Welcome {{name}}</h2>
//             <button (click)="onClick($event)">Greet</button>
//             <button (click)="greeting='welcome kareem'">Greet</button>
//             {{greeting}}`,

// Template Reference Variables
// template: `<h2> Welcome{{name}} </h2>
//             <input #myInput type = "text">
//             <button (click)="logMessage(myInput)">Log</button>  `,

// Two-way Binding 
// template: `<input  [(ngModel)]="name" type="text">
//             {{name}}`,

// Structural directives
// template: `<h2 *ngIf="displayName; else elseBlock">Karimulla</h2>
//             <ng-template #elseBlock>
//            <h2>Karimulla hidden</h2>
//            </ng-template>`,
//ngIf second method
// template:`<div *ngIf="displayName; then thenBlock; else elseBlock"></div>
//            <ng-template #thenBlock>
//            <h2>Karimulla</h2>
//            </ng-template>
           
//            <ng-template #elseBlock>
//            <h2>Hidden</h2>
//            </ng-template>`,

// ngSwitch
// template: `
//           <div [ngSwitch]="color">
//             <div *ngSwitchCase="'red'">You picked red color </div>
//             <div *ngSwitchCase="'blue'">You picked red color </div>
//             <div *ngSwitchCase="'green'">You picked red color </div>
//             <div *ngSwitchDefault>You pick again </div>
//           </div>
// `,

// ngFor structural directives
// template: `
//           <div *ngFor="let color of colors; index as i">
//             <h2>{{i}} {{color}}</h2>
//            </div> 
// `,

// ngFor first element is array or not
// template: `
//           <div *ngFor="let color of colors; first as f">
//             <h2>{{f}} {{color}}</h2>
//            </div> 
// `,

// ngFor last element is array or not
// template: `
//           <div *ngFor="let color of colors; last as l">
//             <h2>{{l}} {{color}}</h2>
//            </div> 
// `,

// odd
// template: `
//           <div *ngFor="let color of colors; odd as o">
//             <h2>{{o}} {{color}}</h2>
//            </div> 
// `,

// Even ngFor
// template: `
//           <div *ngFor="let color of colors; even as e">
//             <h2>{{e}} {{color}}</h2>
//            </div> 
// `,

// parent to child and child to parent
// template: `
//             <h2>{{"Hello " + name}}</h2>
//             <button (click)="fireEvent()">Send Event</button>
// `,

// pipes
template: `
            <h2>{{ name }}</h2>
            <h2>{{ name | lowercase }} </h2>
            <h2>{{ name | uppercase }} </h2>
            <h2>{{ message | titlecase }} </h2>
            <h2>{{ name | slice: 3:5 }} </h2>
            <h2>{{ person | json }} </h2>

            <h2>{{ 5.678 | number: '1.2-3' }} </h2>
            <h2>{{ 5.678 | number: '3.4-5' }} </h2>
            <h2>{{ 5.678 | number: '3.1-2' }} </h2>

            <h2>{{ 0.25 | percent }} </h2>

            <h2>{{ 0.25 | currency }} </h2>
            <h2>{{ 0.25 | currency: 'GBP': 'code' }} </h2>
            <h2>{{ 0.25 | currency: 'EUR': 'code' }} </h2>

            <h2>{{ date }} </h2>
            <h2>{{ date | date: 'short'}} </h2>
            <h2>{{ date | date: 'shortDate'}} </h2>
            <h2>{{ date | date: 'shortTime'}} </h2>

            <h2>{{ date }} </h2>
            <h2>{{ date | date: 'medium'}} </h2>
            <h2>{{ date | date: 'mediumDate'}} </h2>
            <h2>{{ date | date: 'mediumTime'}} </h2>
`,

styles: []
})
export class TestComponent implements OnInit {

  // public name = "karimulla";
  // public myId = "testId";
  // public isDisabled = false;
  // public siteUrl = window.location.href;
  // public successClass = "text-success";
  // public hasError = true;
  // public isSpecial = true;
  // public messageClasses = {
  //   "text-success": !this.hasError,
  //   "text-danger": this.hasError,
  //   "text-special": this.isSpecial
  // }
  // public highlightColor = "orange";
  // public titleStyles = {
  //   color: "blue",
  //   fontStyle: "italic"
  // }
  // public greeting = "";
  // public name="";
  // displayName = false;
  // public color = 'orange';
  // public colors = ["red", "blue", "green", "orange"];

  // Parent to child
  // @Input() public parentData
  // @Input('parentData') public name;
  // @Output() public childEvent = new EventEmitter();

  // pipes
  public name = "narendra";
  public message = "Welcome to narendra";
  public person = {
    "firstName": "vamsi",
    "lastName": "Aila"
  }

  // Date pipe
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

  // greetUser() {
  //   return "Hello " + this.name;
  // }

  // onClick(event) {
  //   console.log(event);
  //   this.greeting = event.type;
  // }

  // logMessage(value) {
  //   console.log(value);
  // }

  // fireEvent() {
  //   this.childEvent.emit('Hey Vamsi');
  // }
}
