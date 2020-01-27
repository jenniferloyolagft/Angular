import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedsComponent } from './breeds/breeds.component';
import { FurPipe } from './fur.pipe';
import { NosePipe } from './nose.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent,
    FurPipe,
    NosePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
