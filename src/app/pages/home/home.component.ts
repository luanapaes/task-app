import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { AddTaskButtonComponent } from '../../shared/add-task-button/add-task-button.component';
import { StatusCardComponent } from '../../shared/status-card/status-card.component';
import { TaskComponent } from '../../shared/task/task.component';
import { Task } from '../../shared/interfaces/task-interface';
import { TaskService } from '../../shared/services/task.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AddTaskButtonComponent,
    StatusCardComponent, TaskComponent, CommonModule,
    DatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  #taskService = inject(TaskService)

  public tasks = signal<null | Task[]>([]);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTask()
  }

  public task$ = this.#taskService.getAll();

  getTask(){
    this.task$.subscribe(
      {
        next: (next) => {
          this.tasks.set(next);
        },
        error: (error) => console.log(error),
        complete: () => console.log("Completed!")
      }
    )
  }

}
