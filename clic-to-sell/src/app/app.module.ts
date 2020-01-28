import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedsComponent } from './breeds/breeds.component';
import { FurPipe } from './pipes/fur.pipe';
import { NosePipe } from './pipes/nose.pipe';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent,
    FurPipe,
    NosePipe,
    BreedDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
