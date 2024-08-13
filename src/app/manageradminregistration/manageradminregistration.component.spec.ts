import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageradminregistrationComponent } from './manageradminregistration.component';

describe('ManageradminregistrationComponent', () => {
  let component: ManageradminregistrationComponent;
  let fixture: ComponentFixture<ManageradminregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageradminregistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageradminregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
