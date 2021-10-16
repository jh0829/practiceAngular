import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 通信系
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

// サイドバー
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// コンポーネント
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPageComponent } from './main/menu-page/menu-page.component';
import { GetDataComponent } from './data/get-data/get-data.component';
import { FirstPageComponent } from './main/first-page/first-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuPageComponent,
    GetDataComponent,
    FirstPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
