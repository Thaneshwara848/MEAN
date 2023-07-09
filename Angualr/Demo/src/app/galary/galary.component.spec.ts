import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaryComponent } from './galary.component';

describe('GalaryComponent', () => {
  let component: GalaryComponent;
  let fixture: ComponentFixture<GalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalaryComponent]
    });
    fixture = TestBed.createComponent(GalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
