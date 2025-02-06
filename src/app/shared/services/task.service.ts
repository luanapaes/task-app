import { inject, Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/task-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  urlAPI = signal(environment.apiTask);
  apiKey = signal(environment.apiKEY)
  httpClient = inject(HttpClient)
  
  constructor() { }

  getAll(): Observable<Task[]>{
    const headers = { 
      'apikey': this.apiKey(), 
      'Authorization': `Bearer ${this.apiKey()}` 
    };

    return this.httpClient.get<Task[]>(this.urlAPI(), { headers }).pipe(
      shareReplay()
    );
  }

  get(id:string): Observable<Task>{
    const headers = {
      'apikey': this.apiKey(),
      'Authorization': `Bearer ${this.apiKey()}`
    };

    return this.httpClient.get<Task>(`${this.urlAPI()}?id=eq.${id}`, 
      { headers }).pipe(
        shareReplay()
      )
  }
}
