import { Component, Inject, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css',
  imports: [MatButtonModule,MatDialogActions,MatDialogContent,MatDialogTitle],
})
export class DeleteDialogComponent {  
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taskId: number,username:string }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false); // Return false for cancel
  }

  onConfirm(): void {
    this.dialogRef.close(true); // Return true for confirm
  }
}
