import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-card',
  standalone: true,
  imports: [],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.scss'
})
export class StatusCardComponent {
  @Input() status: string = '';
  @Input() qtdTasks: string = '';
  @Input() icone: string = '';
  @Input() backgroundColor: string = '';
}
