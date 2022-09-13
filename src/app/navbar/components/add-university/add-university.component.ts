import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {


   universityForm !:FormGroup;

   file :any;


  constructor(private router:Router,private universityService:UniversityService) { }

  ngOnInit(): void {

    this.universityForm = new FormGroup({
      name: new FormControl(''),
      country: new FormControl(''),
      file : new FormControl(''),
      address: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      description: new FormControl(''),

    });



  }

  
  getFile(event:any){


    this.file = event.target.files[0];

    this.universityForm.get('file')?.setValue(this.file);
      
  }


  addUniversity(){


    const formData = new FormData();

    console.log(this.universityForm.get('name')?.value)

    formData.append('name',this.universityForm.get('name')?.value);
    formData.append('country',this.universityForm.get('country')?.value);
    formData.append('file',this.universityForm.get('file')?.value);
    formData.append('address',this.universityForm.get('address')?.value);
    formData.append('startDate',this.universityForm.get('startDate')?.value);
    formData.append('endDate',this.universityForm.get('endDate')?.value);
    formData.append('description',this.universityForm.get('description')?.value);


    console.log(this.universityForm.value);

    this.universityService.createUniversity(formData).subscribe(res =>{

      if(res!=null){

        this.router.navigate(['/MoveOnEsprit/universities']);

      }else {


        console.log("not found");

        console.log(res);
      }

    });

  }

}
