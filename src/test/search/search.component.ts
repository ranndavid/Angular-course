import { Component, OnInit   } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  tasks: Task[] = [];
  searchTerm: string = '';
  constructor(private taskService: TaskService) {}

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
}
