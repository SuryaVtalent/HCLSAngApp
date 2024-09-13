import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagereceptionistComponent } from './managereceptionist.component';

describe('ManagereceptionistComponent', () => {
  let component: ManagereceptionistComponent;
  let fixture: ComponentFixture<ManagereceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagereceptionistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagereceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
