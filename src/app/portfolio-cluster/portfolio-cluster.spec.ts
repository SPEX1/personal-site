import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCluster } from './portfolio-cluster';

describe('PortfolioCluster', () => {
  let component: PortfolioCluster;
  let fixture: ComponentFixture<PortfolioCluster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCluster],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioCluster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
