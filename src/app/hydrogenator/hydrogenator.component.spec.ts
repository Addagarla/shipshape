import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrogenatorComponent } from './hydrogenator.component';

describe('HydrogenatorComponent', () => {
  let component: HydrogenatorComponent;
  let fixture: ComponentFixture<HydrogenatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydrogenatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydrogenatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
