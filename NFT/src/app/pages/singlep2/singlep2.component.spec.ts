import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlep2Component } from './singlep2.component';

describe('Singlep2Component', () => {
  let component: Singlep2Component;
  let fixture: ComponentFixture<Singlep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singlep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singlep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
