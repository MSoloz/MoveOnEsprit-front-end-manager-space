import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent implements OnInit {

  userId: any;

  id:any;

  candidate : any;

  notification!: Notification;
  
  notificationForm !:FormGroup;

  constructor(private route:ActivatedRoute,private router:Router,private notificationService:NotificationService,private candidateService:CandidateService) { }

  ngOnInit(): void {


    this.userId = localStorage.getItem('userId');

    this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });

    this.candidateService.getCandidateById(this.id).subscribe( res =>  this.candidate = res );

    this.notificationForm = new FormGroup({ 

      message : new FormControl(''),

  
       });
  }


  sendNotification(){ 

    console.log(this.notificationForm.get('message')!.value);

    var notification = new Notification(this.notificationForm.get('message')!.value,this.userId,this.candidate.student.id);

    this.notificationService.createNotification(notification).subscribe( res => {

      if(res!=null){

      this.router.navigate(['MoveOnEsprit/candidates']);

      console.log(res);

      }

   },err=> {console.log(err);});

  }


}

class Notification {

  message!: string;

  senderId!: string;

  receiverId!: string;

  public constructor(message: string,senderId: string,receiverId: string) {
    this.message = message;
    this.senderId = senderId;
    this.receiverId = receiverId;
  }


}
