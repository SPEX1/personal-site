import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { LandingPageComponent } from './landing-page-component/landing-page-component';
import { ImprintPageComponent } from './imprint-page-component/imprint-page-component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'imprint', component: ImprintPageComponent },
];
