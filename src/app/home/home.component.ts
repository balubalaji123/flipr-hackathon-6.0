import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getSocialMediaInfo().subscribe(
      (data) => {
        console.log("data", data)
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
