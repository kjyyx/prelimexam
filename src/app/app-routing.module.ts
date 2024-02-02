import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'Partners',
    component: PartnersComponent,
  },
  {
    path: 'About',
    component: AboutComponent,
  },
  {
    path: 'Join',
    component: JoinComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
