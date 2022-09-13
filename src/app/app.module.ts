import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UniversitiesComponent } from './navbar/components/universities/universities.component';
import { PostsComponent } from './navbar/components/posts/posts.component';
import { ProfileComponent } from './navbar/components/profile/profile.component';


import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddUniversityComponent } from './navbar/components/add-university/add-university.component';
import { EditUniversityComponent } from './navbar/components/edit-university/edit-university.component';
import { AddPostComponent } from './navbar/components/add-post/add-post.component';
import { EditPostComponent } from './navbar/components/edit-post/edit-post.component';
import { EditProfileComponent } from './navbar/components/edit-profile/edit-profile.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContratComponent } from './navbar/components/contrat/contrat.component';
import { AdmisComponent } from './navbar/components/admis/admis.component';
import { AdmisDetailsComponent } from './navbar/components/admis-details/admis-details.component';
import { CandidatesComponent } from './navbar/components/candidates/candidates.component';
import { CandidateDetailsComponent } from './navbar/components/candidate-details/candidate-details.component';
import { SendNotificationComponent } from './navbar/components/send-notification/send-notification.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UniversitiesComponent,
    PostsComponent,
    ProfileComponent,
    AddUniversityComponent,
    EditUniversityComponent,
    AddPostComponent,
    EditPostComponent,
    EditProfileComponent,
    ContratComponent,
    AdmisComponent,
    AdmisDetailsComponent,
    CandidatesComponent,
    CandidateDetailsComponent,
    SendNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule, 
    MatBadgeModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    NgxPaginationModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
