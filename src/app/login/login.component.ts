import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerService } from '../services/manager.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  hide = true;

  user : any;


   loginForm !:FormGroup;


  constructor(private managerService:ManagerService,private router:Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,Validators.required),
    },{updateOn:'submit'});

  }

  
  userLogin() {

    console.log(this.loginForm.value);
    

    if(this.loginForm.invalid){

      return;

    }
 


    this.managerService.login(this.loginForm.value).subscribe( res=>{ 

        if(res!=null){



          this.user = res;

          localStorage.setItem('userId',this.user.id);


          console.log(localStorage.getItem('userId'));


          this.router.navigate(['/MoveOnEsprit/posts']);


        }else {


          console.log("not found");

          console.log(res);
        }


     })
 
  

   }

  }



