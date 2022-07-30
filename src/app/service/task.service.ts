import { Injectable } from '@angular/core';
import {HttpClient,HttpHandler} from '@angular/common/http'
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl = 'http://localhost:5000/tasks'
  constructor(
    private http:HttpClient
  ) { }
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}