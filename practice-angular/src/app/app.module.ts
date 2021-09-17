import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 通信系
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

// コンポーネント
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPageComponent } from './main/menu-page/menu-page.component';
import { GetDataComponent } from './data/get-data/get-data.component';
import { FirstPageComponent } from './main/first-page/first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPageComponent,
    GetDataComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
