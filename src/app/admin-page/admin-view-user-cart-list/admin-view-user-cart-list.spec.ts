import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewUserCartList } from './admin-view-user-cart-list';

describe('AdminViewUserCartList', () => {
  let component: AdminViewUserCartList;
  let fixture: ComponentFixture<AdminViewUserCartList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewUserCartList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewUserCartList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
