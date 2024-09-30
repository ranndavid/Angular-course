import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-structure-directive',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './structure-directive.component.html',
  styleUrl: './structure-directive.component.css'
})
export class StructureDirectiveComponent {
    // isCambo : boolean= true;
    isCambo = false;
    names = ["rin", "mengly","both","Nak","Vd"]
selectedValue= "case1";

showtext() {
  this.isCambo = !this.isCambo;
}

}
