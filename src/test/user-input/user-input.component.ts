import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
interface User {
  name: string;
  age: number | null;
  gender: string;
}

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  user: User = { name: '', age: null, gender: '' };
  users: User[] = [];
  editingIndex: number | null = null; // Track the index of the user being edited

  addUser(form: NgForm) {
    if (form.valid) {
      if (this.editingIndex !== null) {
        // Update existing user
        this.users[this.editingIndex] = { ...this.user };
        this.editingIndex = null; // Reset editing index
      } else {
        // Add new user
        this.users.push({ ...this.user });
      }
      this.resetForm(form); // Reset the form after adding/updating
      console.log("User:", this.users); // Log current users array
    } else {
      alert("Please fill in all required fields correctly.");
    }
  }

  resetForm(form: NgForm) {
    form.resetForm(); // Reset the form control states
    this.user = { name: '', age: null, gender: '' }; // Reset user input
    this.editingIndex = null; // Reset editing index
  }

  deleteUser(index: number) {
    this.users.splice(index, 1); // Remove the user at the specified index
  }

  editUser(index: number) {
    this.editingIndex = index; // Set the index of the user to edit
    this.user = { ...this.users[index] }; // Populate the form with the user data
  }
}