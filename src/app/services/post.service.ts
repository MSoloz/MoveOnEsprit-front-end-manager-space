import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) {  }

  getPosts() { 

    return this.http.get(`${this.apiServerUrl}/post/all`);
  
  }


  addPost(data:any) { 

   return this.http.post(`${this.apiServerUrl}/post/create`, data);

  }


  getPostById(id:any) { 

  return this.http.get(`${this.apiServerUrl}/post/details/` + id );

   }

  
 updatePostById(id:any,data:any){

  return this.http.put(`${this.apiServerUrl}/post/update/`+id, data);
  
 }  

 deletePost(id:any){

  return this.http.delete(`${this.apiServerUrl}/post/delete/`+id);
  
 }  


}
