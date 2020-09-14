import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiServiceService } from './api-service.service';
import {HttpClientModule} from '@angular/common/http'
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { NotificationComponent } from './notification/notification.component';
import {MatCardModule} from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { GraphsComponent } from './graphs/graphs.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    NotificationComponent,
    HospitalsComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
