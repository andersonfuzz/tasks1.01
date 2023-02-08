import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/template/header/header.service';
import { Task } from '../task.model';
import { TaskServiceService } from '../task.service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  task:Task={
    name:""
  };
  constructor(
    private router: Router,
    private taskService: TaskServiceService,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    this.headerService.headerData = {
      title: "Do you know what you're doing?",
      icon: 'delete',
      routeUrl: '/delete',
    };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.readById(id).subscribe((task) => {
      this.task = task;
    });
  }

  delete() {
    this.taskService.delete(this.task.id).subscribe(() => {
      this.taskService.showMessage('task deleted!');
      this.router.navigate(['/task']);
    });
  }
  cancel() {
    this.router.navigate(['/task']);
  }
}
