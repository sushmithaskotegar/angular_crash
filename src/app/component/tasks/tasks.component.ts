import { Component, Input, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
tasks:Task[]=[];
  constructor(private taskServive:TaskService) { }

  ngOnInit(): void {
  this.taskServive.getTasks().subscribe((tasks)=>(this.tasks=tasks));
  }

}
