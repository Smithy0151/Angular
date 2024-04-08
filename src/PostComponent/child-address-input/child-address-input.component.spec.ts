import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAddressInputComponent } from './child-address-input.component';

describe('ChildAddressInputComponent', () => {
  let component: ChildAddressInputComponent;
  let fixture: ComponentFixture<ChildAddressInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildAddressInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildAddressInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
