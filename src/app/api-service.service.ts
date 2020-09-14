import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public server_url='https://flipr-hackathon-be.herokuapp.com';
  private contact_url: string = `${this.server_url}/contact`
  private notification_url: string = `${this.server_url}/notification`
  private hospitalbeds_url: string = `${this.server_url}/dashboard/hospital-beds`
  private collegebeds_url: string = `${this.server_url}/dashboard/medicalcollege-beds`
  private deceased_url: string = ''
  private socialmedia_url = `${this.server_url}/contact/contact-details`;

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
