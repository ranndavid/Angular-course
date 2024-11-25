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
}
