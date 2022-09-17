import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';


@Component({
  selector: 'app-admis',
  templateUrl: './admis.component.html',
  styleUrls: ['./admis.component.css']
})
export class AdmisComponent implements OnInit {

  admis : any = [];
  
  page : number = 1;

  constructor(private candidatService: CandidateService) { }

  ngOnInit(): void {

    this.candidatService.getAllAdmis().subscribe( res => this.admis = res );


  }

}
