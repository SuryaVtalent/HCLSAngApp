import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationaladminComponent } from './operationaladmin.component';

describe('OperationaladminComponent', () => {
  let component: OperationaladminComponent;
  let fixture: ComponentFixture<OperationaladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationaladminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationaladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
