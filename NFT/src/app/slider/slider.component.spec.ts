import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SLIDERComponent } from './slider.component';

describe('SLIDERComponent', () => {
  let component: SLIDERComponent;
  let fixture: ComponentFixture<SLIDERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SLIDERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SLIDERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
