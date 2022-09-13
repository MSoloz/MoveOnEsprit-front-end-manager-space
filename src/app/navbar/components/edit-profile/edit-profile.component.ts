import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


  profileForm !:FormGroup;

  file : any;

  id : any;

  editData : any;


  constructor(private router:Router,private managerService:ManagerService) { }

  ngOnInit(): void {

    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      description: new FormControl(''),
      file: new FormControl(''),

    });

    this.id = localStorage.getItem('userId');

    this.managerService.getManagerById(this.id).subscribe(res=>{
      
        this.editData  = res;

        console.log(this.editData);

        if(res!=null){

        this.profileForm.controls['firstName'].setValue(this.editData.firstName);
        this.profileForm.controls['lastName'].setValue(this.editData.lastName);
        this.profileForm.controls['email'].setValue(this.editData.email);
        this.profileForm.controls['phone'].setValue(this.editData.phone);
        this.profileForm.controls['description'].setValue(this.editData.description);
    
      }

    }

    )

  }



  
  editProfile(){

    console.log(this.profileForm.value);

    const formData = new FormData();
    
    formData.append('firstName',this.profileForm.get('firstName')?.value);
    formData.append('lastName',this.profileForm.get('lastName')?.value);
    formData.append('file',this.profileForm.get('file')?.value);
    formData.append('email',this.profileForm.get('email')?.value);
    formData.append('phone',this.profileForm.get('phone')?.value);
    formData.append('description',this.profileForm.get('description')?.value);


    this.managerService.updateManagerById(this.id,formData).subscribe(res =>{

      if(res !=null){

        this.router.navigate(['/MoveOnEsprit/universities']);


      }else {


        console.log("not found");

        console.log(res);
      }



    });

  }

  getFile(event:any){
    
    this.file = event.target.files[0];

    this.profileForm.get('file')?.setValue(this.file);
      
  }

   






}
