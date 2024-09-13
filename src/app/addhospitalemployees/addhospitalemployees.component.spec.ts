import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhospitalemployeesComponent } from './addhospitalemployees.component';

describe('AddhospitalemployeesComponent', () => {
  let component: AddhospitalemployeesComponent;
  let fixture: ComponentFixture<AddhospitalemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddhospitalemployeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddhospitalemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
