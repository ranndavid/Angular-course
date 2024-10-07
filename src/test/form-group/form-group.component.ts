import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatIconAnchor } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { UserData } from './utill';


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
    CommonModule
  ],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {
  @Output() onAddUser: EventEmitter<UserData> = new EventEmitter();
  profileForm = new FormGroup({
    phone : new FormControl(''),
    password : new FormControl(''),
    
  });
  
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
