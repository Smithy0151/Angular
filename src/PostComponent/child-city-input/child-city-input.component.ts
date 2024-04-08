import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-city-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-city-input.component.html',
  styleUrl: './child-city-input.component.css'
})
export class ChildCityInputComponent {
  newCity: string = '';

  @Output() cityAdded = new EventEmitter<string>();

  sumbitCity(){
    this.cityAdded.emit(this.newCity);
    this.newCity = '';
  }

}
