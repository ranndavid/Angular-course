import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-json-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './json-form.component.html',
  styleUrl: './json-form.component.css'
})
export class JsonFormComponent implements OnInit{
  form: FormGroup;

  jsonData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: {
      city: 'New York',
      zip: '10001'
    },
    skills: ['JavaScript', 'Angular','React']
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({}); // Initialize with an empty form group
  }

  ngOnInit() {
    this.buildFormFromJson(this.jsonData);
  }

  buildFormFromJson(json: any) {
    this.form = this.fb.group({
      name: [json.name],
      email: [json.email],
      address: this.fb.group({
        city: [json.address.city],
        zip: [json.address.zip]
      }),
      skills: this.fb.array(json.skills.map((skill: any) => new FormControl(skill)))
    });
  }

  get skills(): FormArray<FormControl> {
    return this.form.get('skills') as FormArray<FormControl>;
  }
  

  public addSkill(skill: string) {
    this.skills.push(new FormControl(skill));
  }

  public onSubmit() {
    console.log(this.form.value);
    this.resetForm();
  }
  private resetForm() {
    this.form.reset(); // Reset the form to its initial state
  }
  
}
