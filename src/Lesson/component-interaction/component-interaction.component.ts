import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-component-interaction',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './component-interaction.component.html',
  styleUrl: './component-interaction.component.css'
})
export class ComponentInteractionComponent {

  @Input() parentData ="";
  @Output() myChildEvent = new EventEmitter() //data constructor  
  age=18;
  dob = new Date();
  stu ={name:"dara",gender:"male",age:21}
  sendAge() {
    this.myChildEvent.emit(this.age);
  }

 
}
