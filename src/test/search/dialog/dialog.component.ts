import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule,MatInputModule,MatButtonModule,FormsModule,MatDatepickerModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  newTask = { username: '', address: '', date: '' };

  constructor(private dialogRef: MatDialogRef<DialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.dialogRef.close(this.newTask);
  }
}
