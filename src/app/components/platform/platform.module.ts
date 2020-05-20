import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { PlatformRoutingModule } from './platform-routing.module';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthGuard } from "../../guards/auth-guard.service";

import { PlatformComponent } from './platform.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { RequestComponent } from './request/request.component';
import { CampaignComponent } from './campaign/campaign.component';
import { NewCampaingComponent } from './new-campaing/new-campaing.component';
import { NewCampaingEmailComponent } from './new-campaing-email/new-campaing-email.component';
import { PublicationComponent } from './publication/publication.component';
import { CommentComponent } from './comment/comment.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { PersonalComponent } from './personal/personal.component';
import { NewPersonalComponent } from './new-personal/new-personal.component';
import { FbaccountComponent } from './fbaccount/fbaccount.component';
import { NewFbaccountComponent } from './new-fbaccount/new-fbaccount.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added,
    PlatformRoutingModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent, 
    PlatformComponent,
    ProfileComponent,
    HomeComponent,
    PostComponent,
    RequestComponent,
    CampaignComponent,
    NewCampaingComponent,
    NewCampaingEmailComponent,
    PublicationComponent,
    CommentComponent,
    NewCommentComponent,
    PersonalComponent,
    NewPersonalComponent,
    FbaccountComponent,
    NewFbaccountComponent
  ],
  providers: [AuthGuard]
})
export class PlatformModule { }
