import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCityInputComponent } from './child-city-input.component';

describe('ChildCityInputComponent', () => {
  let component: ChildCityInputComponent;
  let fixture: ComponentFixture<ChildCityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCityInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildCityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
