import {Component, OnInit, inject} from '@angular/core';
import { Landing } from '../landing/landing';
import { InfoBox } from '../info-box/info-box';
import { Intro } from '../intro/intro';
import {ViewportScroller} from '@angular/common';

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
export class LandingPageComponent implements OnInit {

  private viewport = inject(ViewportScroller);

  ngOnInit() {
    this.viewport.scrollToPosition([0, 0]);
  }
}
