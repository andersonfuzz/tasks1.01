import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/template/header/header.service';
import { Task } from '../task.model';
import { TaskServiceService } from '../task.service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  task: Task = {
    name: '',
    description: '',
  };
  constructor(
    private taskService: TaskServiceService,
    private router: Router,
    private headerService: HeaderService
  ) {
    this.headerService.headerData = {
      title: 'Add new task',
      icon: 'add_task',
      routeUrl: '/create',
    };
  }

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
