import { EventEmitter, Injectable } from '@angular/core';
import { ArchivedTask } from './ArchivedTask.model';
import { Task } from '../tasks/task.model';

@Injectable()
export class ArchivedService {
  private archivedTasks: ArchivedTask[] = [];
  archivedTasksChanged: EventEmitter<ArchivedTask[]> = new EventEmitter<
    ArchivedTask[]
  >();

  createNewArchivedTasks(tasks: Task[]) {
    tasks.forEach((task) => {
      this.archivedTasks.push(
        new ArchivedTask(
          task.title,
          task.description,
          task.creationDate,
          task.doneDate
        )
      );
    });
    this.archivedTasksChanged.emit(this.getArchivedTasks());
  }

  getArchivedTasks(): ArchivedTask[] {
    return this.archivedTasks.slice();
  }
}
