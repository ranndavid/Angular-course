import { Component, OnInit   } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule,MatIconModule,MatButtonModule,MatDialogModule ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  tasks: Task[] = [];
  searchTerm: string = '';
  constructor(private taskService: TaskService ,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  // Load all tasks
  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  // Search tasks by username
  searchByUsername(): void {
    
    
    this.taskService.searchTasksByUsername(this.searchTerm).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Add the new task to the list
        const newTask: Task = { id: this.tasks.length + 1, ...result }; // Generate ID dynamically
        this.tasks.push(newTask);
      }
    });
  }
  
  deleteTask(taskId: number, username: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: { taskId, username } // Pass taskId and username to the dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed deletion
        this.taskService.deleteTask(taskId).subscribe(updatedTasks => {
          this.tasks = updatedTasks; // Update the tasks list after deletion
        });
      }
    });
  }
}
