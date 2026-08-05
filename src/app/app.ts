import {Component, OnInit, signal, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Landing } from './landing/landing';
import { InfoBox } from './info-box/info-box';
import { Footer } from './footer/footer';
import { Intro } from './intro/intro';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Landing,
    InfoBox,
    Footer,
    Intro,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private viewport = inject(ViewportScroller);

  ngOnInit() {
    this.viewport.scrollToPosition([0, 0]);
  }
}
