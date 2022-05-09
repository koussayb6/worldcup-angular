import { TestBed } from '@angular/core/testing';

import { MembreStaffService } from './membreStaff.service';

describe('StaffmemberService', () => {
  let service: MembreStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembreStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
