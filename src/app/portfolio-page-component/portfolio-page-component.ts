import { Component } from '@angular/core';
import { PortfolioCluster } from '../portfolio-cluster/portfolio-cluster';

@Component({
  selector: 'app-portfolio-page-component',
  imports: [PortfolioCluster],
  template: `
    <app-portfolio-cluster></app-portfolio-cluster>
  `,
  styleUrl: './portfolio-page-component.css',
})
export class PortfolioPageComponent {}
