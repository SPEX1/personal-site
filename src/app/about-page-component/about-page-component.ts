import { Component, inject, OnInit } from '@angular/core';
import { Abouttext } from '../abouttext/abouttext';
import { Idcard } from '../idcard/idcard';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-page-component',
  imports: [Idcard, Abouttext],
  template: `
    <app-abouttext></app-abouttext>
    <app-idcard></app-idcard>
  `,
  styleUrl: './about-page-component.css',
})
export class AboutPageComponent {

  private viewport = inject(ViewportScroller);

  ngOnInit() {
    this.viewport.scrollToPosition([0, 0]);
  }
}
