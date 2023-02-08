import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  task!: Task;
  displayedColumns = ['id', 'name', 'description', 'actions'];

  constructor(
    private router: Router,
    private taskService: TaskServiceService,
    private headerService: HeaderService,
    private route: ActivatedRoute
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

  taskDone(id: number) {
    this.taskService.readById(id).subscribe((task) => {
      this.task = task;
      this.task.done = !this.task.done;

      this.taskService.update(this.task).subscribe((taskUpdate) => {
        let msg = taskUpdate.done ? 'task completed' : 'task not completed';
        this.taskService.showMessage(msg);
      });
    });
  }
  ngOnInit(): void {
    this.taskService.read().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
