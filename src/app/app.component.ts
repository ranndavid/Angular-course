import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterperationComponent } from '../Lesson/interperation/interperation.component';
import { EventBindingComponent } from "../Lesson/event-binding/event-binding.component";
import { TemplateReferanceComponent } from "../Lesson/template-referance/template-referance.component";
import { TwowayBindingComponent } from "../Lesson/twoway-binding/twoway-binding.component";
import { StructureDirectiveComponent } from "../Lesson/structure-directive/structure-directive.component";
import { ComponentInteractionComponent } from "../Lesson/component-interaction/component-interaction.component";
import { UserInputComponent } from "../test/user-input/user-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterperationComponent, EventBindingComponent, TemplateReferanceComponent, TwowayBindingComponent, StructureDirectiveComponent, ComponentInteractionComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name = 'Tola';
  theAge  = 0;
  recieveAge(a:any) {
  this.theAge =a ;
}

  

}

