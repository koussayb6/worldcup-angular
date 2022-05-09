import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreStaffComponent } from './membreStaff.component';

describe('StaffmemberComponent', () => {
  let component: MembreStaffComponent;
  let fixture: ComponentFixture<MembreStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembreStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
