import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  as AWS from 'aws-sdk/global';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { S3 } from 'aws-sdk/clients/s3';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AWS,
    S3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
