import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './tasks/create/create.component';
import { TaskComponent } from './tasks/task/task.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"task",component:TaskComponent},
  {path:"create",component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
