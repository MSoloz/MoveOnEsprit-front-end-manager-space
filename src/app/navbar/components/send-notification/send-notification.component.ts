import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from 'src/app/interfaces/notification';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent implements OnInit {

  userId: any;

  id:any;

  notification!: Notification;
  
   notificationForm !:FormGroup;

  constructor(private route:ActivatedRoute,private router:Router,private notificationService:NotificationService) { }

  ngOnInit(): void {


    this.userId = localStorage.getItem('userId');

    this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });

    this.notificationForm = new FormGroup({ 

      message : new FormControl(''),

      senderId:this.userId,

      receiverId :this.id

       });
  }


  sendNotification(){ 

   /* this.notification.message = this.notificationForm.get('message')!.value;

    this.notification.senderId = this.userId;

    this.notification.receiverId = this.id;

    console.log(this.notification);*/


    this.notificationService.createNotification(this.notification).subscribe( res => {

      console.log(res);

   },err=> {console.log(err);});

  }


}
