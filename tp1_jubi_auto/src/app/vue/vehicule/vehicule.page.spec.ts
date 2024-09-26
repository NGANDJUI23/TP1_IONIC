import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculePage } from './vehicule.page';

describe('VehiculePage', () => {
  let component: VehiculePage;
  let fixture: ComponentFixture<VehiculePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
