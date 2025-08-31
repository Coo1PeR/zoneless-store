import { TestBed } from '@angular/core/testing';

import { UserData } from './user-data';

describe('UserService', () => {
  let service: UserData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
