import { Component } from '@angular/core';
import { Person } from '../../classes/Person';
import { FormsModule } from '@angular/forms';
import { ChildAddressInputComponent } from '../child-address-input/child-address-input.component';
import { ChildCityInputComponent } from '../child-city-input/child-city-input.component';
import { ChildCountryInputComponent } from '../child-country-input/child-country-input.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent-post',
  standalone: true,
  imports: [FormsModule, ChildAddressInputComponent, ChildCityInputComponent, ChildCountryInputComponent],
  templateUrl: './parent-post.component.html',
  styleUrl: './parent-post.component.css'
})
export class ParentPostComponent {
  person: Person;

  constructor(private http: HttpClient){
    this.person = new Person("","",[""],[""],[""]);
  }
  

  addAddress(newAddress: string) {
    this.person.addresses.push(newAddress);
    console.log(this.person);
  }

  addCity(newCity: string) {
    this.person.cities.push(newCity);
    console.log(this.person);
  }

  addCountry(newCountry: string) {
    this.person.countries.push(newCountry);
    console.log(this.person);
  }


  postData(){
    let propertiesArray = this.person.addresses.map(address => ({ address }));
    let areasArray = this.person.cities.map((city, index) => ({ city, country: this.person.countries[index] }));

    console.log("Properties Array" + propertiesArray)
    this.http.post('https://localhost:7037/api/RealEstate', 
    {name: this.person.name, 
    commission: {description: this.person.commision}, 
    properties: propertiesArray,
    areas: areasArray})
    .subscribe(config => {
      console.log(config);
    });
  }
}
