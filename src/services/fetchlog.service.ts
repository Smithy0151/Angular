import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FetchlogService {

  constructor(private http: HttpClient) { }
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];
  agentData: any = [];
  

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }

  getAgent() {
    console.log("Hello World");
    this.http.get(`https://localhost:7037/api/RealEstate/8`).subscribe((agentData: any) => { 
      console.log(agentData);
      this.agentData = agentData;
    });
  }

  //This returns an observable which needs to be subscribed to
  testTwo(): Observable<any> {
    return this.http.get('https://localhost:7037/api/RealEstate').pipe(
      map((response: any) => {
        return response;
      }));
    }
  }
