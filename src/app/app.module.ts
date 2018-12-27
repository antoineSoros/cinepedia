import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeekComponent } from './cinepedia/seek/seek.component';
import {CinepediaComponent} from './cinepedia/cinepedia.component';

@NgModule({
  declarations: [
    AppComponent,
    SeekComponent,
    CinepediaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
