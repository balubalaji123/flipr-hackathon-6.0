import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }
  public api_fil;
  public api_d1;
  public api_d;
  public table_data1;
  public table_data;
  public selected_table = "hospitals";
  public states = ['All States'];
  public types = ['All Types'];
  public selected_type = 'All Types'
  public selected_state = 'All States'

  onChange_state(s){
    this.selected_state = s;
    console.log(s,this.selected_state);
    console.log(this.api_fil.length);
    let table_dummy = this.api_d1;
    if(this.selected_state!==this.states[0]){
      if(this.selected_type===this.types[0])
      this.api_fil = table_dummy.filter(i=> i.state===this.selected_state );
      else{
        if(this.selected_type==="NA"){
          this.api_fil = table_dummy.filter(i=> i.state===this.selected_state && i.ownership===null);
        }
        else
        this.api_fil = table_dummy.filter(i=> i.state===this.selected_state && i.ownership===this.selected_type);
      }
    }
    else{
        if(this.selected_type==="NA"){
          this.api_fil = table_dummy.filter(i=> i.ownership===null);
        }
        else if(this.selected_type!==this.types[0])
        this.api_fil = table_dummy.filter(i=>  i.ownership===this.selected_type);
        else{
          this.api_fil = table_dummy
        }
      
    }

    console.log(this.api_fil.length,this.api_fil)
    this.i1 = 0;
    this.i2 = 10;
    this.updateData1();
  }

  onChange_type(t){
    this.selected_type = t;
    console.log(t,this.selected_type);
    let table_dummy = this.api_d1;
    if(this.selected_type!==this.types[0]){
      if(this.selected_state===this.states[0]){
        if(this.selected_type!=="NA")
        this.api_fil = table_dummy.filter(i=> i.ownership===this.selected_type);
        else{
          this.api_fil = table_dummy.filter(i=> i.ownership===null); 
        }
      }
      else{
        if(this.selected_type!=="NA")
        {
          this.api_fil = table_dummy.filter(i=> i.ownership===this.selected_type);
          this.api_fil = this.api_fil.filter(i=> i.state===this.selected_state);
          console.log(this.api_fil,table_dummy,this.selected_type,this.selected_state);
        }
        else{
          this.api_fil = table_dummy.filter(i=> {i.ownership===null && i.state===this.selected_state}); 
        }
      }
    }
    else{
      if(this.selected_state!==this.states[0])
      this.api_fil = table_dummy.filter(i=>  i.state===this.selected_state);
      else{
        this.api_fil = table_dummy
      }

    }
    console.log(this.api_fil.length,this.api_fil)
    this.i1 = 0;
    this.i2 = 10;
    this.updateData1();

    
  }

  table_change(s){
    this.selected_table = s;
    this.i1 = 0;
    this.i2 = 10;
    if(s==='hospitals')this.updateData();
    else{ 
      this.updateData1(); 
      this.api_fil = this.api_d1;
      this.selected_state = 'All States';
      this.selected_type = 'All Types';
      this.onChange_state(this.selected_state);
      this.onChange_type(this.selected_type)
    } 
  }

  ngOnInit(): void {
    this.apiService.gethospitalbeds().subscribe(
      (data) => {
        console.log("*****api data****\n", data);
        // this.data = data;
        this.displayLoader = false;
        this.api_d = data;
        console.log(this.api_d.length)
        this.table_data = this.api_d.slice(0, 10)
        // this.updateData1();
        console.log(this.table_data)

      },
      (err) => {
        console.log(err)
      }
    )
    this.apiService.getcollegebeds().subscribe(
      (data)=>{
        this.displayLoader = false;
        this.api_d1 = data;
        this.api_fil = data;
        console.log(this.api_d1.length)
        this.table_data1 = this.api_d1.slice(0,10)
        console.log(this.table_data1)
        for(let i=0;i<this.api_d1.length;i++){
          if(!this.states.includes(this.api_d1[i].state)){
            this.states.push(this.api_d1[i].state);
          }
          if(!this.types.includes(this.api_d1[i].ownership)){
            if(this.api_d1[i].ownership!==null) this.types.push(this.api_d1[i].ownership);
            else{this.types.push('NA')}
          }
        }
        console.log(this.states.length,this.types.length);
        // console.log(this.states,this.types);
      },
      (err) => {
        console.log(err)
      }
    )
  }

  public i1 = 0;
  public i2 = 10;
  public displayLoader = true;

  prev_col() {
    if (this.i1 == 0) {
      console.log('No change');
    }
    else {
      this.i2 = this.i1;
      this.i1 -= 10;
    }
    console.log(this.i1, this.i2)
    if(this.selected_table==='hospitals') this.updateData();
    else this.updateData1();
  }


  next_col() {
    console.log(this.i1, this.i2);
    if(this.selected_table==='hospitals'){
      if (this.i2 == this.api_d.length) {
        console.log('No Change');
      }
      else {
        this.i1 += 10;
        this.i2 = Math.min(this.i2 + 10, this.api_d.length);
      }

      this.updateData();
    } 
    else{
      if (this.i2 == this.api_fil.length) {
        console.log('No Change');
      }
      else {
        this.i1 += 10;
        this.i2 = Math.min(this.i2 + 10, this.api_fil.length);
      }

      this.updateData1();
    } 
  }

  updateData() {
    console.log('indexes:', this.i1, this.i2)
    // console.log(this.api_d)
    this.table_data = this.api_d.slice(this.i1, this.i2);
  }

  updateData1() {
    // console.log(this.api_d1)
    if(this.i2>this.api_fil.length)
    this.i2 = this.api_fil.length;
    console.log('indexes:', this.i1, this.i2)
    this.table_data1 = this.api_fil.slice(this.i1, this.i2);
  }

}
