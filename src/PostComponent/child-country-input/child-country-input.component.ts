import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-country-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-country-input.component.html',
  styleUrl: './child-country-input.component.css'
})
export class ChildCountryInputComponent {
  newCountry: string = '';

  @Output() countryAdded = new EventEmitter<string>();

  submitCountry(){
    this.countryAdded.emit(this.newCountry);
    this.newCountry = '';
  }
}
