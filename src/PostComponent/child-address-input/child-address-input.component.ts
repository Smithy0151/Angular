import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-address-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-address-input.component.html',
  styleUrl: './child-address-input.component.css'
})
export class ChildAddressInputComponent {
  newAddress: string = '';

  @Output() addressAdded = new EventEmitter<string>();

  submitAddress() {
    this.addressAdded.emit(this.newAddress);
    this.newAddress = '';
  }
}
