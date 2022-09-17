import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates : any = [];

  page:number = 1;

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {

  this.candidateService.getAllCondidats().subscribe( res=> this.candidates = res);

  }

}
