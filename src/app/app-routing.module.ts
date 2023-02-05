import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './view/tasks/update/update.component';

import { HomeComponent } from './view/home/home.component';
import { CreateComponent } from './view/tasks/create/create.component';
import { TaskComponent } from './view/tasks/task/task.component';
import { DeleteComponent } from './view/tasks/delete/delete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'create', component: CreateComponent },
  { path: 'tasks/update/:id', component: UpdateComponent },
  { path: 'tasks/delete/:id', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
