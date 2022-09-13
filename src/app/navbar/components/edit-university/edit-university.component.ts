import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-edit-university',
  templateUrl: './edit-university.component.html',
  styleUrls: ['./edit-university.component.css']
})
export class EditUniversityComponent implements OnInit {


   universityForm !:FormGroup;

  id:any;

  file:any;

  editData :any;


  constructor(private router:Router,private route: ActivatedRoute, private universityService: UniversityService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });

    this.universityForm = new FormGroup({
      name: new FormControl(''),
      country: new FormControl(''),
      file: new FormControl(''),
      address: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      description: new FormControl(''),

    });


    this.universityService.getUniversityById(this.id).subscribe(res=>{

      if(res!=null){

        this.editData  = res;

        this.universityForm.controls['name'].setValue(this.editData.name);
        this.universityForm.controls['country'].setValue(this.editData.country);
        this.universityForm.controls['address'].setValue(this.editData.address);
        this.universityForm.controls['startDate'].setValue(this.editData.startDate);
        this.universityForm.controls['endDate'].setValue(this.editData.endDate);
        this.universityForm.controls['description'].setValue(this.editData.description);
      }

    })
    

  }


  editUniversity(){

    console.log(this.universityForm.value);

    const formData = new FormData();
    
    formData.append('name',this.universityForm.get('name')?.value);
    formData.append('country',this.universityForm.get('country')?.value);
    formData.append('file',this.universityForm.get('file')?.value);
    formData.append('address',this.universityForm.get('address')?.value);
    formData.append('startDate',this.universityForm.get('startDate')?.value);
    formData.append('endDate',this.universityForm.get('endDate')?.value);
    formData.append('description',this.universityForm.get('description')?.value);

    this.universityService.updateUniversity(this.id,formData).subscribe(result =>{

      if(result!=null){

        this.router.navigate(['/MoveOnEsprit/universities']);

      }else {
    
        console.log("not found");

        console.log(result);
      }



    });

  }

  getFile(event:any){


    this.file = event.target.files[0];

    this.universityForm.get('file')?.setValue(this.file);
      
  }

  

  }



