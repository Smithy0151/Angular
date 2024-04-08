import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchlogService } from '../services/fetchlog.service';
import { HttpClientModule } from '@angular/common/http';
import { Console } from 'console';
import { ParentPostComponent } from '../PostComponent/parent-post/parent-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ParentPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  fetchLog = inject(FetchlogService);
  display = '';
  myData: any = [];
  

  constructor() {
    this.display = this.fetchLog.getCars().join(' ⭐️ ')
    //this.fetchLog.getAgent();
  }

  ngOnInit(): void {
    this.fetchLog.testTwo().subscribe((data) => {
      this.myData = data;
      console.log(this.myData);
      console.log(this.myData[0].properties[0].address);
    });
  }

  
}
