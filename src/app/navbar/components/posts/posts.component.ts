import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  apiServerUrl = environment.apiBaseUrl;

  posts : any = [];

  constructor(private router: Router,private postService: PostService) { }

  ngOnInit(): void {

    this.postService.getPosts().subscribe(res =>{

      this.posts = res;

      console.log(res);

    });

  }



  deletePost(id: string) {  


    this.postService.deletePost(id).subscribe(res=>{

      this.ngOnInit();
      
     });


  }


  navigate(){

    this.router.navigate([]);

  }

}
