import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task.model';
import { TaskServiceService } from '../task.service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  task!:Task
  constructor(private router:Router,
              private taskService:TaskServiceService,
              private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')
      this.taskService.readById(id).subscribe((task)=>{
        this.task=task
      })
  }

  delete(){
    this.taskService.delete(this.task.id).subscribe(()=>{
      this.taskService.showMessage('task deleted!')
      this.router.navigate(['/task'])
    })
  }
  cancel(){
    this.router.navigate(['/task'])
  }
}
