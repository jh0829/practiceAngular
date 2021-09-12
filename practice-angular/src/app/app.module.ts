import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirtsPageComponent } from './main/firts-page/firts-page.component';
import { MenuPageComponent } from './main/menu-page/menu-page.component';
import { GetDataComponent } from './data/get-data/get-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FirtsPageComponent,
    MenuPageComponent,
    GetDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
