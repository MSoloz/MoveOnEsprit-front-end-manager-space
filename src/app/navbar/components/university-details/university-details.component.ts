import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversityService } from 'src/app/services/university.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent implements OnInit {

  apiServerUrl = environment.apiBaseUrl;

   university : any;

   id:any;


  constructor(private route :ActivatedRoute, private universityService: UniversityService) { }

  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });

     this.universityService.getUniversityById(this.id).subscribe( res => { this.university = res ; });


  }

}
