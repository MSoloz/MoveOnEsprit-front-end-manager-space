import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notification } from '../interfaces/notification';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient){ }

  createNotification(data:any){

    return this.http.post(`${this.apiServerUrl}/notification/create`, data);

  }


}
