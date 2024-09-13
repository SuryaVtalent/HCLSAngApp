import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehospitalemployeesComponent } from './managehospitalemployees.component';

describe('ManagehospitalemployeesComponent', () => {
  let component: ManagehospitalemployeesComponent;
  let fixture: ComponentFixture<ManagehospitalemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagehospitalemployeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagehospitalemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
