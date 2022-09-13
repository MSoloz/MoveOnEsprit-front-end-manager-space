import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  apiServerUrl = environment.apiBaseUrl;

  id :any;

  user : any;

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {


    this.id = localStorage.getItem('userId');


    this.managerService.getManagerById(this.id).subscribe( res => {

      this.user = res;

    })

  }


}
