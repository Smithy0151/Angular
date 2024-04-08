import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCountryInputComponent } from './child-country-input.component';

describe('ChildCountryInputComponent', () => {
  let component: ChildCountryInputComponent;
  let fixture: ComponentFixture<ChildCountryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCountryInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildCountryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
