import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCountriesComponent } from './consult-countries.component';

describe('ConsultCountriesComponent', () => {
  let component: ConsultCountriesComponent;
  let fixture: ComponentFixture<ConsultCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
