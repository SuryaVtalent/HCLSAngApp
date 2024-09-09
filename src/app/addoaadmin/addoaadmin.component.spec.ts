import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoaadminComponent } from './addoaadmin.component';

describe('AddoaadminComponent', () => {
  let component: AddoaadminComponent;
  let fixture: ComponentFixture<AddoaadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddoaadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddoaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
