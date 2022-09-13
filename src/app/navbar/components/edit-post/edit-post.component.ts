import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postForm !:FormGroup;

  id:any;

  file:any;

  editData :any;

  userId:any;

  constructor(private route:ActivatedRoute,private router:Router, private postService:PostService){ }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });

    this.userId = localStorage.getItem('userId');

    this.postForm = new FormGroup({
     
      description: new FormControl(''),

      file : new FormControl(''),

    });

   this.postService.getPostById(this.id).subscribe(res => {

        this.editData = res ;

        console.log(this.editData);

        this.postForm.controls['description'].setValue(this.editData.description);

   });
  }

  
  editPost(){


    console.log(this.postForm.value);

    const formData = new FormData();

    formData.append('description',this.postForm.get('description')?.value);

    formData.append('file',this.postForm.get('file')?.value)

    formData.append('creator',this.userId);

    this.postService.updatePostById(this.id,formData).subscribe(res =>{

      if(res!=null){

        this.router.navigate(['/MoveOnEsprit/posts']);

      }else {

        console.log("not found");

        console.log(res);
      }

    });

  }

  getFile(event:any){


    this.file = event.target.files[0];

    this.postForm.get('file')?.setValue(this.file);
      
  }

  

}
