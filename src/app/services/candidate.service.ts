import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {


  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http:HttpClient) { }

  getAllCondidats(){

    return this.http.get(`${this.apiServerUrl}/candidate/all`);
 
   }

   getAllAdmis(){

    return this.http.get(`${this.apiServerUrl}/candidate/admis`);
 
   }
 
   getCandidateById(id: any){
 
     return this.http.get(`${this.apiServerUrl}/candidate/details/`+id);
 
   }
}
