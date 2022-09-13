import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { jsPDF} from 'jspdf';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})


export class ContratComponent implements OnInit {

  

  id:any;

  candidate : any;

  manager : any;

  @ViewChild('content',{static:false}) el!:ElementRef;

  
  constructor(private route:ActivatedRoute,private candidateService:CandidateService){ }

  ngOnInit(): void {

  this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });
 
  this.candidateService.getCandidate(this.id).subscribe( res =>  this.candidate = res );  


  }


  makePDF(){

   let pdf = new jsPDF('p','pt','a4');

     let  data = [{id: 1,name: "Peter"},{id: 2, name: "Chris"}];

 

   pdf.html(this.el.nativeElement,{callback :(pdf)=>{

     pdf.save('contrat.pdf');

   }});



   

  }

}
