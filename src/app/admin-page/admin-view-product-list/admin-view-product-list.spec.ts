import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewProductList } from './admin-view-product-list';

describe('AdminProductList', () => {
  let component: AdminViewProductList;
  let fixture: ComponentFixture<AdminViewProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewProductList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
