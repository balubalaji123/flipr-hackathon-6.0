import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }
  public data;
  public api_d;
  public table_data;
  ngOnInit(): void {
    this.apiService.gethospitalbeds().subscribe(
      (data) => {
        console.log("*****api data****\n", data);
        this.data = data;
        this.displayLoader = false;
         this.api_d = data
         console.log(this.api_d.length)
        this.table_data = this.api_d.slice(0, 10)
        console.log(this.table_data)

      },
      (err) => {
        console.log(err)
      }
    )
  }

  public i1 = 0;
  public i2 = 10;
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

  updateData() {
    console.log('indexes:', this.i1, this.i2)
    console.log(this.api_d)
    this.table_data = this.api_d.slice(this.i1, this.i2);
  }



}
