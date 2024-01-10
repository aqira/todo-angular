import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskItemComponent } from './tasks/task-list/task-item/task-item.component';
import { HeaderComponent } from './header/header.component';
import { ArchivedComponent } from './archived/archived.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskService } from './tasks/task.service';
import { ArchivedService } from './archived/archived.service';

const appRoutes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'archived', component: ArchivedComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    HeaderComponent,
    ArchivedComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [TaskService, ArchivedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
