import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Idcard } from './idcard';

describe('Idcard', () => {
  let component: Idcard;
  let fixture: ComponentFixture<Idcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Idcard],
    }).compileComponents();

    fixture = TestBed.createComponent(Idcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
