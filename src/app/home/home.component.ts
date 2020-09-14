import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = {
    "number": "+91-11-23978046",
    "number-tollfree": "1075",
    "email": "ncov2019@gov.in",
    "twitter": "https://twitter.com/MoHFW_INDIA",
    "facebook": "https://www.facebook.com/MoHFWIndia",
  }

}
