import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/template/header/header.service';
import { Task } from 'src/app/view/tasks/task.model';
import { TaskServiceService } from 'src/app/view/tasks/task.service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  task!: Task;
  constructor(
    private tasksService: TaskServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    this.headerService.headerData = {
      title: 'Edit your tasks here',
      icon: 'browser_updated',
      routeUrl: '/update',
    };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tasksService.readById(id).subscribe((task) => {
      this.task = task;
    });
  }
  editTask() {
    this.tasksService.update(this.task).subscribe(() => {
      this.tasksService.showMessage('edited task!');
      this.router.navigate(['task']);
    });
  }
  cancel() {
    this.router.navigate(['task']);
  }
}
