import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abouttext } from './abouttext';

describe('Abouttext', () => {
  let component: Abouttext;
  let fixture: ComponentFixture<Abouttext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abouttext],
    }).compileComponents();

    fixture = TestBed.createComponent(Abouttext);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
