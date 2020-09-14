import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private contact_url: string = 'http://localhost:3000/contact'
  private notification_url: string = 'http://localhost:3000/notification'
  private hospitalbeds_url: string = 'http://localhost:3000/dashboard/hospital-beds'
  private collegebeds_url: string = 'http://localhost:3000/dashboard/medicalcollege-beds'
  private deceased_url: string = ''
  private socialmedia_url = 'http://localhost:3000/contact/contact-details';

  constructor(private http: HttpClient) {

  }

  contact_details() {
    return this.http.get(this.contact_url);
  }

  getnotifications() {
    return this.http.get(this.notification_url);
  }

  gethospitalbeds() {
    return this.http.get(this.hospitalbeds_url);
  }
  getcollegebeds() {
    return this.http.get(this.collegebeds_url);
  }
  getdeceasedcount() {
    return this.http.get(this.deceased_url);
  }
  getSocialMediaInfo() {
    return this.http.get<any>(this.socialmedia_url);
  }

}
