import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 通信系
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

// マテリアル
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

// コンポーネント
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPageComponent } from './main/menu-page/menu-page.component';
import { GetDataComponent } from './data/get-data/get-data.component';
import { FirstPageComponent } from './main/first-page/first-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchTopComponent } from './search/search-top/search-top.component';
import { SideMenuComponent } from './search/side-menu/side-menu.component';
import { SearchListUserComponent } from './search/search-list-user/search-list-user.component';
import { SearchMenuComponent } from './search/search-menu/search-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPageComponent,
    GetDataComponent,
    FirstPageComponent,
    SearchTopComponent,
    SideMenuComponent,
    SearchListUserComponent,
    SearchMenuComponent,
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
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    LayoutModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {
      appearance: 'outline',
      floatLabel: 'always', } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
