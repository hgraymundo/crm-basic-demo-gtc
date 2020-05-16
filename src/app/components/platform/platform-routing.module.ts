import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatformComponent } from './platform.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../../guards/auth-guard.service';

const platformRoutes: Routes = [
    { path: 'platform', component: PlatformComponent,
      children:[
        { path: 'home', component: HomeComponent },
        { path: 'profile', component: ProfileComponent }
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
