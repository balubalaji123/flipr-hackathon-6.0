import { Component, OnInit } from '@angular/core';
// import { threadId } from 'worker_threads';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private _api_service:ApiServiceService) { }

    ngOnInit(): void {
      this._api_service.getnotifications().subscribe( data =>{
        this.api_d = data;
        this.api_notif = this.api_d;
        console.log(this.api_notif);
        this.data_modifier();
        this.updateData();
      })
      // this.data_modifier();
      // this.updateData();
    }

    // public api_notif = this.api_data.data.notifications;
    public api_d:any;
    public api_notif = [];
    public disp_data = [];
    public data_modifier(){
      console.log('inside',this.api_notif)
      this.api_notif.forEach(i => {
        let obj = {};
        if(i.title[2]==='.' && i.title[5]==='.' && i.title.slice(6,10)==='2020'){
          // console.log(i.title.slice(0,10));
          obj["date"] = i.title.slice(0,10);
          obj["notif"] = i.title.slice(11,i.title.length);
          obj["link"] = i.link;
        }
        else{
          i.title = i.title.replace("&nbsp;"," ");
          obj["date"] = "No Date";
          obj["notif"] = i.title;
          obj["link"] = i.link;
        }
        this.disp_data.push(obj);
        console.log(obj);
      });
      console.log(this.disp_data.length)
    }
  public i1 = 0;
  public i2 = 10;  
  public table_data;
  updateData(){
    console.log('indexes:',this.i1,this.i2)
    this.table_data = this.disp_data.slice(this.i1,this.i2);    
  }

  prev_col(){
    if(this.i1==0){
      console.log('No change');
    }
    else{
      this.i2 = this.i1;
      this.i1-=10;
    }
    console.log(this.i1,this.i2)
    this.updateData();
  }


  next_col(){
    if(this.i2==this.disp_data.length){
      console.log('No Change');
    }
    else{
      this.i1 +=10;
      this.i2 = Math.min(this.i2+10,this.disp_data.length);
    }
    console.log(this.i1,this.i2);
    this.updateData();
  }
  

}
