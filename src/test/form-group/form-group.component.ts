import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatIconAnchor } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { UserData } from './utill';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [
    ReactiveFormsModule ,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButton,
    MatSelectModule,
    CommonModule,
    MatTabsModule
  ],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {
  @Output() onAddUser: EventEmitter<UserData> = new EventEmitter();
  profileForm = new FormGroup({
    phone : new FormControl(''),
    password : new FormControl(''),
    mail : new FormControl(' '),
  });
  users: UserData[] = [];
  
  onSubmit() {
    if (this.profileForm.valid) {
      // Push the form data to the users array
      this.users.push(this.profileForm.value as UserData);
      console.log('User array:', this.users);

      // Emit the form data to parent if necessary
      // this.onAddUser.emit(this.profileForm.value as UserData);
      
 
      this.profileForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
