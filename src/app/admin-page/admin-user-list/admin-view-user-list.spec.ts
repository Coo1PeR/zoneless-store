import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewUserList } from './admin-view-user-list';

describe('AdminUserList', () => {
  let component: AdminViewUserList;
  let fixture: ComponentFixture<AdminViewUserList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewUserList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewUserList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
