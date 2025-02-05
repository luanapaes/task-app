import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent{
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() createAt: string = '';
  @Input() status: boolean = true;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.status)
  }
}
