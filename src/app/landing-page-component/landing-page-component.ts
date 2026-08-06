import { Component } from '@angular/core';
import { Landing } from '../landing/landing';
import { InfoBox } from '../info-box/info-box';
import { Intro } from '../intro/intro';

@Component({
  selector: 'app-landing-page-component',
  imports: [
    Landing,
    InfoBox,
    Intro,
  ],
  template: `
    <app-landing></app-landing>
    <app-info-box></app-info-box>
    <app-intro></app-intro>
  `,
  styleUrl: './landing-page-component.css',
})
export class LandingPageComponent {}
