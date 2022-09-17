import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http:HttpClient) { }

  getAllUniversities() { 

    return this.http.get(`${this.apiServerUrl}/university/all`);
  
  }

 getUniversityById(id:any) {  


  return this.http.get(`${this.apiServerUrl}/university/details/`+id);


     }

 createUniversity(data:any){


  return this.http.post(`${this.apiServerUrl}/university/create`, data);

  
 }    

 
 updateUniversity(id:any,data:any){


  return this.http.put(`${this.apiServerUrl}/university/update/`+id, data);

  
 }    


 deleteUniversityById(id:any){


  return this.http.delete(`${this.apiServerUrl}/university/delete/`+id);

  
 }    




}
