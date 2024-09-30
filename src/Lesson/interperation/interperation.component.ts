import { Component } from '@angular/core';

@Component({
  selector: 'app-interperation',
  standalone: true,
  imports: [],
  templateUrl: './interperation.component.html',
  styleUrl: './interperation.component.css'
})
export class InterperationComponent {
  isUnchanged = false;
calculate() {
  console.log("test");
 return 5+10;
}
  public name = "Dara"
  gender ="male"
}
