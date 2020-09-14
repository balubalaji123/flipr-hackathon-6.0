import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.contact_details().subscribe(
      (data) => {
        console.log("*****api data****\n", data);
        this.data = data;
        this.displayLoader = false;
         this.api_d = data
         console.log(this.api_d.length)
        this.table_data = this.api_d.slice(0, 10)

      },
      (err) => {
        console.log(err)
      }
    )
  }

  public i1 = 0;
  public i2 = 10;
  public data;
  public displayLoader = true;
  public initialDisplay=18;

  prev_col() {
    if(this.initialDisplay>18){
      this.initialDisplay=18;
    }
    if (this.i1 == 0) {
      console.log('No change');
    }
    else {
      this.i2 = this.i1;
      this.i1 -= 10;
    }
    console.log(this.i1, this.i2)
    this.updateData();
  }


  next_col() {
    if (this.i2 == this.api_d.length) {
      console.log('No Change');
    }
    else {
      this.i1 += 10;
      this.i2 = Math.min(this.i2 + 10, this.api_d.length);
    }
    console.log(this.i1, this.i2);
    this.updateData();
  }

  
  public api_d
  public table_data 
  updateData() {
    console.log('indexes:', this.i1, this.i2)
    console.log(this.api_d)
    this.table_data = this.api_d.slice(this.i1, this.i2);
  }
}
