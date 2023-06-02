import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AboutComponent } from './about/about.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeComponent, UnderConstructionComponent, MenComponent, WomenComponent, AboutComponent, AccessoriesComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
