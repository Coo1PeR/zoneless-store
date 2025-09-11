import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewUserCart } from './admin-view-user-cart';

describe('AdminViewUserCart', () => {
  let component: AdminViewUserCart;
  let fixture: ComponentFixture<AdminViewUserCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewUserCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewUserCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
