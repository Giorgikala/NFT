import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsshopComponent } from './detailsshop.component';

describe('DetailsshopComponent', () => {
  let component: DetailsshopComponent;
  let fixture: ComponentFixture<DetailsshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
