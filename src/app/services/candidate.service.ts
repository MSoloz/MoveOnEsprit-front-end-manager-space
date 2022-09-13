import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {


  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http:HttpClient) { }

  getCondidats(){

    return this.http.get(`${this.apiServerUrl}/candidate/all`);
 
   }

   getAdmis(){

    return this.http.get(`${this.apiServerUrl}/candidate/admis`);
 
   }
 
   getCandidate(id: any){
 
     return this.http.get(`${this.apiServerUrl}/candidate/details/`+id);
 
   }
}
