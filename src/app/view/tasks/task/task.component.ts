import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/template/header/header.service';
import { Task } from '../task.model';
import { TaskServiceService } from '../task.service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks!: Task[];
  displayedColumns = ['id', 'name', 'description', 'actions'];

  constructor(
    private router: Router,
    private taskService: TaskServiceService,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Tasks added so far',
      icon: 'task_alt',
      routeUrl: '/task',
    };
  }

  navigate(path: string) {
    this.router.navigate([`${path}`]);
  }
  ngOnInit(): void {
    this.taskService.read().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}

