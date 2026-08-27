import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page-component/landing-page-component';
import { ImprintPageComponent } from './imprint-page-component/imprint-page-component';
import {PrivacyPageComponent} from './privacy-page-component/privacy-page-component';
import {PortfolioPageComponent} from './portfolio-page-component/portfolio-page-component';
import { AboutPageComponent } from './about-page-component/about-page-component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'imprint', component: ImprintPageComponent },
  { path: 'privacy', component: PrivacyPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'about', component: AboutPageComponent },
];
