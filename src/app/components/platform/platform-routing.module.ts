import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatformComponent } from './platform.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from '../../guards/auth-guard.service';
import { PostComponent } from './post/post.component';
import { RequestComponent } from './request/request.component';
import { CampaignComponent } from './campaign/campaign.component';
import { NewCampaingComponent } from './new-campaing/new-campaing.component';
import { NewCampaingEmailComponent } from './new-campaing-email/new-campaing-email.component';

const platformRoutes: Routes = [
    { path: 'platform', component: PlatformComponent,
      children:[
        { path: '', component: HomeComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'post', component: PostComponent },
        { path: 'request', component: RequestComponent },
        { path: 'campaign', component: CampaignComponent },
        { path: 'new-campaign-sms', component: NewCampaingComponent },
        { path: 'new-campaign-email', component: NewCampaingEmailComponent },
      ]
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(platformRoutes)
  ],
  exports: [RouterModule],
  
})

export class PlatformRoutingModule { }
