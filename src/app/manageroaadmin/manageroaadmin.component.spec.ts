import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageroaadminComponent } from './manageroaadmin.component';

describe('ManageroaadminComponent', () => {
  let component: ManageroaadminComponent;
  let fixture: ComponentFixture<ManageroaadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageroaadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageroaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
