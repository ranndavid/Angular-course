import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from '../popup/popup.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  public exampleForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    // Initialize the form group
    this.exampleForm = this.fb.group({
      favoriteFood: ['', Validators.required],
      fastFood: ['', Validators.required]
    });
  }

  submitForm() {
    // Open PopupComponent as a dialog
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '600px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      // position: { right: '50' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
    });
  }
  openDialog() {
    this.dialog = inject(MatDialog);

    this.openDialog(); {
      this.dialog.open(PopupComponent, {
        data: {
          animal: 'panda',
        },
      });
    }
    }
}
