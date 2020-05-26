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
import { PublicationComponent } from './publication/publication.component';
import { CommentComponent } from './comment/comment.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { PersonalComponent } from './personal/personal.component';
import { NewPersonalComponent } from './new-personal/new-personal.component';
import { FbaccountComponent } from './fb-account/fbaccount.component';
import { RobotComponent } from './robot/robot.component';
import { NewFbaccountComponent } from './new-fb-account/new-fbaccount.component';
import { PubCommentComponent } from './pub-comment/pub-comment.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

const platformRoutes: Routes = [
    { path: 'platform', component: PlatformComponent,
      children:[
        { path: '', component: HomeComponent },
        // { path: 'profile', component: ProfileComponent },
        // { path: 'post', component: PostComponent },
        // { path: 'comment/:id', component: CommentComponent },
        // { path: 'new-comment/:id', component: NewCommentComponent },
        // { path: 'request', component: RequestComponent },
        // { path: 'campaign', component: CampaignComponent },
        // { path: 'new-campaign-sms', component: NewCampaingComponent },
        // { path: 'new-campaign-email', component: NewCampaingEmailComponent },
        // { path: 'collaborator', component: PersonalComponent },
        // { path: 'new-collaborator', component: NewPersonalComponent },
        { path: 'account', component: AccountComponent },
        { path: 'new-account', component: NewAccountComponent },
        { path: 'fb-account', component: FbaccountComponent },
        { path: 'new-fb-account', component: NewFbaccountComponent },
        { path: 'publication/:id', component: PublicationComponent },
        { path: 'new-comment/:id', component: NewCommentComponent },
        { path: 'pub-comment/:id', component: PubCommentComponent }

        // { path: 'robot', component: RobotComponent }

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
