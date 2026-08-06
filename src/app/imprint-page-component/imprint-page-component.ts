import { Component } from '@angular/core';
import {Imprint} from '../imprint/imprint'
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-imprint-page-component',
  imports: [Imprint, Contact ],
  template: `
    <app-imprint></app-imprint>
    <app-contact></app-contact>
  `,
  styleUrl: './imprint-page-component.css',
})
export class ImprintPageComponent {}
