import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  private baseUrl = 'http://localhost:3001/tasks';
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('error', true);
    return EMPTY;
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  read(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  readById(id: any): Observable<Task> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  update(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put<Task>(url, task).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  delete(id: any): Observable<Task> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Task>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
