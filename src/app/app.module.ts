import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ApiServiceService } from './api-service.service';
import {HttpClientModule} from '@angular/common/http'
=======
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
>>>>>>> 6c5d86d9ef2961cd0463503bb592fe1e07917016

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    MatButtonModule
>>>>>>> 6c5d86d9ef2961cd0463503bb592fe1e07917016
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
