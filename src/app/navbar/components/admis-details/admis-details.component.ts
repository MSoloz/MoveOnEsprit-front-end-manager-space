import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-admis-details',
  templateUrl: './admis-details.component.html',
  styleUrls: ['./admis-details.component.css']
})
export class AdmisDetailsComponent implements OnInit {

  apiServerUrl = environment.apiBaseUrl;

  candidate:any;

  id :any;

  constructor(private route : ActivatedRoute,private candidateService: CandidateService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });

  console.log(this.id);

  this.candidateService.getCandidateById(this.id).subscribe( res => { 
    
    this.candidate = res ;

    console.log(this.id);
  
    console.log(this.candidate);  });
  }

}
