import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


 postForm !:FormGroup;

 file :any;
  
 id:any;

  constructor(private router:Router,private postService:PostService) { }

  ngOnInit(): void {

    this.id = localStorage.getItem('userId')

   this.postForm = new FormGroup({ 

       description : new FormControl(''),

       file : new FormControl(''),

        });

  }



  addPost(){

    const formData = new FormData();

    console.log(this.postForm.get('name')?.value)

    formData.append('description',this.postForm.get('description')?.value);
    formData.append('file',this.postForm.get('file')?.value)
    formData.append('creator',this.id);

    this.postService.addPost(formData).subscribe( res =>{

      if(res!=null){

        this.router.navigate(['/MoveOnEsprit/posts']);

      }else {


        console.log("not found");

        console.log(res);
      }



    })

  }


  getFile(event:any){

    this.file = event.target.files[0];

    this.postForm.get('file')?.setValue(this.file);

  }

}
