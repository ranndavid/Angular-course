import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm: FormGroup;
  signUpList: any[] = []; // Array to store the form data

  constructor(private fb: FormBuilder) {
    // Initialize the form with phone/email and password fields
    this.signUpForm = this.fb.group({
      email: ['', [Validators.email]], // Optional email with email validator
      phone: ['', [Validators.pattern(/^[0-9]{10}$/)]], // Optional phone with 10-digit number validator
      password: ['', [Validators.required]] // Password is always required
    });
  }

  // Method to switch validators based on the selected tab
  setValidatorsForTab(tab: string) {
    if (tab === 'Email') {
      this.signUpForm.get('email')?.setValidators([Validators.required, Validators.email]);
      this.signUpForm.get('phone')?.clearValidators();
    } else if (tab === 'Phone') {
      this.signUpForm.get('phone')?.setValidators([Validators.required, Validators.pattern(/^[0-9]{10}$/)]);
      this.signUpForm.get('email')?.clearValidators();
    }

    // Update the status of the form controls
    this.signUpForm.get('email')?.updateValueAndValidity();
    this.signUpForm.get('phone')?.updateValueAndValidity();
  }

  onTabChange(event: any) {
    this.setValidatorsForTab(event.tab.textLabel); // Set validators based on selected tab
  }

onSubmit() {
  console.log('Form Value:', this.signUpForm.value); // Debug log to check form values
  console.log('Form Validity:', this.signUpForm.valid); // Debug log to check form validity

  // Ensure that the password is entered before allowing submission
  const passwordControl = this.signUpForm.get('password');
  if (passwordControl?.valid) {
    const formValue = this.signUpForm.value;

    // Ensure at least one of email or phone is provided along with password
    if (formValue.email || formValue.phone) {
      const filteredData: any = {};

      if (formValue.email) {
        filteredData.email = formValue.email;
      }
      if (formValue.phone) {
        filteredData.phone = formValue.phone;
      }
      filteredData.password = formValue.password; // Always include the password

      // Push the filtered data to the array
      this.signUpList.push(filteredData);
      console.log('Sign Up List:', this.signUpList);

      // Reset the form after submission
      this.signUpForm.reset();
      
      // Re-initialize validators after reset
      this.setValidatorsForTab('Email'); // Reset to default tab
    } else {
      console.error('Either email or phone is required.');
    }
  } else {
    console.error('Password is required.');
    passwordControl?.markAsTouched(); // Mark password field as touched to display validation error
  }
}

}
