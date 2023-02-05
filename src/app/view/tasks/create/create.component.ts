import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task.model';
import { TaskServiceService } from '../task.service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  task: Task = {
    name: '',
    description: '',
  };
  constructor(
    private taskService: TaskServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  createTask() {
    this.taskService.create(this.task).subscribe(() => {
      this.taskService.showMessage('Added task!');
      this.router.navigate(['task']);
    });
  }
  cancel() {
    this.router.navigate(['task']);
  }
}
