import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTools } from './portfolio-tools';

describe('PortfolioTools', () => {
  let component: PortfolioTools;
  let fixture: ComponentFixture<PortfolioTools>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioTools],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioTools);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
