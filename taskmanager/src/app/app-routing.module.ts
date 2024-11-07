import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskformComponent } from './taskform/taskform.component';

const routes: Routes = [
  {path : "taskmanager",component: TaskformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
