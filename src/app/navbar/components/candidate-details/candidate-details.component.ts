import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  apiServerUrl = environment.apiBaseUrl;

  candidate : any;

  id:any;

  constructor(private route:ActivatedRoute,private candidateService: CandidateService) { }

  ngOnInit(): void {


  this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });

  console.log(this.id);

  this.candidateService.getCandidate(this.id).subscribe( res => { 
    
    this.candidate = res ;

    console.log(this.id);
  
    console.log(this.candidate);  });


  }


}
