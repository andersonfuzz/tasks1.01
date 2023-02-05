import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  private url = 'http://localhost:3001/tasks';
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }
  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }
  read(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }
}
