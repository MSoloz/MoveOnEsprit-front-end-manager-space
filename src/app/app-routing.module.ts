import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddPostComponent } from './navbar/components/add-post/add-post.component';
import { AddUniversityComponent } from './navbar/components/add-university/add-university.component';
import { AdmisDetailsComponent } from './navbar/components/admis-details/admis-details.component';
import { AdmisComponent } from './navbar/components/admis/admis.component';
import { CandidateDetailsComponent } from './navbar/components/candidate-details/candidate-details.component';
import { CandidatesComponent } from './navbar/components/candidates/candidates.component';
import { ContratComponent } from './navbar/components/contrat/contrat.component';
import { EditPostComponent } from './navbar/components/edit-post/edit-post.component';
import { EditProfileComponent } from './navbar/components/edit-profile/edit-profile.component';
import { EditUniversityComponent } from './navbar/components/edit-university/edit-university.component';
import { PostsComponent } from './navbar/components/posts/posts.component';
import { ProfileComponent } from './navbar/components/profile/profile.component';
import { SendNotificationComponent } from './navbar/components/send-notification/send-notification.component';
import { UniversitiesComponent } from './navbar/components/universities/universities.component';
import { UniversityDetailsComponent } from './navbar/components/university-details/university-details.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

  {path: '', component:LoginComponent},
{path: 'MoveOnEsprit', component:NavbarComponent,children: [
 {path:'posts', component:PostsComponent},
 {path:'universities', component:UniversitiesComponent},
 {path:'candidates', component:CandidatesComponent},
 {path:'admis', component:AdmisComponent},
 {path:'profile', component:ProfileComponent},
 {path:'addPost', component:AddPostComponent},
 {path:'addUniversity', component:AddUniversityComponent},
 {path:'editPost/:id', component:EditPostComponent},
 {path:'editUniversity/:id', component:EditUniversityComponent},
 {path:'editProfile/:id', component:EditProfileComponent},
 {path:'candidate/details/:id', component:CandidateDetailsComponent},
 {path:'admis/:id', component:AdmisDetailsComponent},
 {path:'university/details/:id', component:UniversityDetailsComponent},
 {path:'contrat/:id', component:ContratComponent},
 {path:'send/notification/:id', component:SendNotificationComponent}


]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
