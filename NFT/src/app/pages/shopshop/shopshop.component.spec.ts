import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopshopComponent } from './shopshop.component';

describe('ShopshopComponent', () => {
  let component: ShopshopComponent;
  let fixture: ComponentFixture<ShopshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
