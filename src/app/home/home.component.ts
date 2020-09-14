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

  data = {
    "number": "+91-11-23978046",
    "number-tollfree": "1075",
    "email": "ncov2019@gov.in",
    "twitter": "https://twitter.com/MoHFW_INDIA",
    "facebook": "https://www.facebook.com/MoHFWIndia",
  }

}
