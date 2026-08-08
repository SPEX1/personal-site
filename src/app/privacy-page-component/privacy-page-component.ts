import { Component } from '@angular/core';
import { Privacy } from '../privacy/privacy';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-privacy-page-component',
  imports: [Privacy, Contact],
  template: `
    <app-privacy></app-privacy>
    <app-contact></app-contact>
  `,
  styleUrl: './privacy-page-component.css',
})
export class PrivacyPageComponent {}
