import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  title = 'flipr-hackathon-fe';
  constructor(private apiservice:ApiServiceService){}
  onclick()
{
  console.log("lokesh")
   this.apiservice.gethospitalbeds()
       .subscribe(data => console.log(data))
}

}


