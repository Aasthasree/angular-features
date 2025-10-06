import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleCounter } from './double-counter';

describe('DoubleCounter', () => {
  let component: DoubleCounter;
  let fixture: ComponentFixture<DoubleCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
