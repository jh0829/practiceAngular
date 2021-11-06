import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pageのコンポーネント
import { FirstPageComponent } from '../app/main/first-page/first-page.component';
import { MenuPageComponent } from '../app/main/menu-page/menu-page.component';
import { SearchTopComponent } from '../app/search/search-top/search-top.component'
import { SearchListUserComponent } from '../app/search/search-list-user/search-list-user.component'
import { SideMenuComponent } from '../app/search/side-menu/side-menu.component'
import { SearchMenuComponent } from '../app/search/search-menu/search-menu.component'

const routes: Routes = [
  { path: 'firstPage', redirectTo: '', pathMatch: 'full'},
  { path: '', component: FirstPageComponent },
  { path: 'main/menuPage', component: MenuPageComponent },
  { path: 'main/search', component: SearchTopComponent },
  { path: 'main/side',
    component: SideMenuComponent,
      children: [
      {
        path: 'user',
        component: SearchListUserComponent
      },
      {
        path: 'menu',
        component: SearchMenuComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
