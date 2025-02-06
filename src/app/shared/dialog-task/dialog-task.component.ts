import { ChangeDetectionStrategy, Component, Inject, inject, model, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomTaskData } from '../interfaces/custom-task-dialog.interface';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-task',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule,
    FormsModule, MatButtonModule,
    MatDialogTitle, MatDialogContent,
    ReactiveFormsModule, CommonModule,
    MatDialogActions, MatDialogClose,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-task.component.html',
  styleUrl: './dialog-task.component.scss'
})
export class DialogTaskComponent {
  readonly dialogRef = inject(MatDialogRef<DialogTaskComponent>);
  readonly data = inject<CustomTaskData>(MAT_DIALOG_DATA);

  isChecked = true;
  router = inject(Router);
  taskService = inject(TaskService);
  
  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(false)
  })

  constructor(@Inject(MAT_DIALOG_DATA) public taskData: { id: string }) {
    const id = this.router.url.split('/').pop() as string;

    this.getTask(id)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getTask(id: string) {
    this.taskService.get(id).subscribe({
      next: (next) => {

        this.taskForm.patchValue({
          title: next.title,
          description: next.description,
          status: next.status
        })
      }
    })
  }
}
