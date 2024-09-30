import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
showInfo(e:any) {  //use type if we use $event
  console.log(e);
  this.name ="GD"
  
}
name!: string;
showMessage() {
  
    this.name ="Vid"   //assign value to name!: string 
}

}
