import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {


  constructor(private http:HttpClient) { }


  private apiServerUrl = environment.apiBaseUrl;

   
  login(data: any):Observable<any>{

    return this.http.post(`${this.apiServerUrl}/manager/login`,data);


  }

  getManagerById(id:any){

  return this.http.get(`${this.apiServerUrl}/manager/details/`+id);

  }


  updateManagerById(id:any,data:any){

    return this.http.put(`${this.apiServerUrl}/manager/update/`+id,data);
  
    
   } 


}
