import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { AddTaskButtonComponent } from '../../shared/add-task-button/add-task-button.component';
import { StatusCardComponent } from '../../shared/status-card/status-card.component';
import { TaskComponent } from '../../shared/task/task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AddTaskButtonComponent,
    StatusCardComponent, TaskComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
