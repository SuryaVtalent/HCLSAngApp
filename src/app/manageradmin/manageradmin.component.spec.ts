import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageradminComponent } from './manageradmin.component';

describe('ManageradminComponent', () => {
  let component: ManageradminComponent;
  let fixture: ComponentFixture<ManageradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageradminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
