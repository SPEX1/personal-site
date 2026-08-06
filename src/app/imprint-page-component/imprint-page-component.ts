import {Component, inject, OnInit} from '@angular/core';
import {Imprint} from '../imprint/imprint'
import { Contact } from '../contact/contact';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-imprint-page-component',
  imports: [Imprint, Contact ],
  template: `
    <app-imprint></app-imprint>
    <app-contact></app-contact>
  `,
  styleUrl: './imprint-page-component.css',
})
export class ImprintPageComponent implements OnInit {

  private viewport = inject(ViewportScroller);

  ngOnInit() {
    this.viewport.scrollToPosition([0, 0]);
  }
}
