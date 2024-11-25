import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { id: 1, username: 'John Doe', address: '123 Main St', date: '2023-11-20' },
    { id: 2, username: 'Jane Smith', address: '456 Elm St', date: '2023-11-21' },
    { id: 3, username: 'Mike Johnson', address: '789 Oak St', date: '2023-11-22' },
    { id: 3, username: 'Mike Johnson', address: '789 Oak St', date: '2023-11-22' }
  ];

  // Get the list of tasks
  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  // Search tasks by username
  searchTasksByUsername(username: string): Observable<Task[]> {
    if (!username) {
      return of(this.tasks); // Return all tasks if no search term is provided
    }else{
    const filteredTasks = this.tasks.filter(task =>
    task.username.toLowerCase().includes(username.toLowerCase())
    );
    return of(filteredTasks);
  }
  }
}
