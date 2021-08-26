import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListadoComponent } from './app.component';

@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ListadoComponent]
})
export class AppModule { }
