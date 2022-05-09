import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMembreStaffComponent } from './edit-membreStaff.component';

describe('EditStaffmemberComponent', () => {
  let component: EditMembreStaffComponent;
  let fixture: ComponentFixture<EditMembreStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMembreStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMembreStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
