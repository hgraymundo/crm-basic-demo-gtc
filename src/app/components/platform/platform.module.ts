import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';

import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthGuard } from "../../guards/auth-guard.service";


import { PlatformComponent } from './platform.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    PlatformRoutingModule
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent, 
    PlatformComponent,
    ProfileComponent,
    HomeComponent
  ],
  providers: [AuthGuard]
})
export class PlatformModule { }
