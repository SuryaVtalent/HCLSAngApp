import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedoctorComponent } from './managedoctor.component';

describe('ManagedoctorComponent', () => {
  let component: ManagedoctorComponent;
  let fixture: ComponentFixture<ManagedoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagedoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
