import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {


   universities :any = [];

   page:number = 1;

  constructor(private router:Router,private universityService: UniversityService) { }

  ngOnInit(): void {

    

    this.universityService.getUniversities().subscribe( res =>{

      this.universities = res;
   
       });

  }

   navigate(){
     this.router.navigate(['/MoveOnEsprit/addUniversity'])
   }


   removeUniversity(id:string){

    this.universityService.deleteUniversity(id).subscribe(res=>{

      this.ngOnInit();


    })

   }



}
