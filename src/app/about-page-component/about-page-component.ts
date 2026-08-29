import { Component, inject, OnInit } from '@angular/core';
import { Contact } from '../contact/contact';
import { Idcard } from '../idcard/idcard';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-page-component',
  imports: [Contact, Idcard],
  template: `
    <app-idcard></app-idcard>
    <app-contact></app-contact>
  `,
  styleUrl: './about-page-component.css',
})
export class AboutPageComponent {

  private viewport = inject(ViewportScroller);

  ngOnInit() {
    this.viewport.scrollToPosition([0, 0]);
  }
}
