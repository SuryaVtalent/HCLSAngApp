import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagelabsComponent } from './managelabs.component';

describe('ManagelabsComponent', () => {
  let component: ManagelabsComponent;
  let fixture: ComponentFixture<ManagelabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagelabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagelabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
