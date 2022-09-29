import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenftsComponent } from './createnfts.component';

describe('CreatenftsComponent', () => {
  let component: CreatenftsComponent;
  let fixture: ComponentFixture<CreatenftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
