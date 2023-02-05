import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task.model';
import { TaskServiceService } from '../task.service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  //     ELEMENT_DATA: Task[] = [
  //   {id: 1, name: 'Hydrogen', description:' 1.0079'},
  //   {id: 2, name: 'Helium', description: '4.0026'},
  //   {id: 3, name: 'Lithium', description: '6.941'},
  //   {id: 4, name: 'Beryllium', description: '9.012'},
  //   {id: 5, name: 'Boron', description: '10.811'},
  //   {id: 6, name: 'Carbon', description: '12.0107'},
  //   {id: 7, name: 'Nitrogen', description: '14.0067'},
  //   {id: 8, name: 'Oxygen', description: '15.999'},
  //   {id: 9, name: 'Fluorine', description: '18.9984'},
  //   {id: 10, name: 'Neon', description: '20.1797'},
  // ];
  tasks!: Task[];
  displayedColumns = ['id', 'name', 'description', 'actions'];

  constructor(
    private router: Router,
    private taskService: TaskServiceService
  ) {}

  navigate(path: string) {
    this.router.navigate([`${path}`]);
  }
  ngOnInit(): void {
    this.taskService.read().subscribe((tasks) => {
      this.tasks=tasks
    });
    // this.tasks=this.ELEMENT_DATA
  }
}
