import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehelpersComponent } from './managehelpers.component';

describe('ManagehelpersComponent', () => {
  let component: ManagehelpersComponent;
  let fixture: ComponentFixture<ManagehelpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagehelpersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagehelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
