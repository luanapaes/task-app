import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTaskComponent } from '../dialog-task/dialog-task.component';
import { CustomTaskData } from '../interfaces/custom-task-dialog.interface';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() createAt: null | string = '';
  @Input() status: boolean = true;

  readonly task = signal<CustomTaskData>({
    id: '',
    title: '',
    description: '',
    status: false
  })
  
  readonly dialog = inject(MatDialog);

  @Input() taskInput: any; // recebe a task do HomeComponent
  @Output() taskSelected = new EventEmitter<number>(); // emite o ID da task para o home

  selectTask() {
    this.taskSelected.emit(this.taskInput.id); // Emite o ID da tarefa para o componente pai
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogTaskComponent, {
      width: '500px',
      height: '700px',
      data: { 
        titleTaskDialog: this.task().title,
        descriptionTaskDialog: this.task().description,
        statusTaskDialog: this.task().status
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.task.set(result);
      }
    });
  }
}
