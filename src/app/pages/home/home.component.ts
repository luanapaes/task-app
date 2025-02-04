import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { AddTaskButtonComponent } from '../../shared/add-task-button/add-task-button.component';
import { StatusCardComponent } from '../../shared/status-card/status-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AddTaskButtonComponent,
    StatusCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
