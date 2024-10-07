import { Component } from '@angular/core';

@Component({
  selector: 'app-template-referance',
  standalone: true,
  imports: [],
  templateUrl: './template-referance.component.html',
  styleUrl: './template-referance.component.css'
})
export class TemplateReferanceComponent {
  name = " "

  show(text: string) {
    this.name = text; //pel assign domlai text nus vea jol tv kan name
    
  }
  display(jmr: any) {
    this.name = jmr.value;
    // this.name = jmr.name;
    // this.name = jmr.id;
  }

}
