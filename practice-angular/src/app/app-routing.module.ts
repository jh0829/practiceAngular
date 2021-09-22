import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pageのコンポーネント
import { FirstPageComponent } from '../app/main/first-page/first-page.component';
import { MenuPageComponent } from '../app/main/menu-page/menu-page.component';
import { SearchListComponent } from '../app/search/search-list/search-list.component';

const routes: Routes = [
  { path: 'firstPage', redirectTo: '', pathMatch: 'full'},
  { path: '', component: FirstPageComponent },
  { path: 'main/menuPage', component: MenuPageComponent },
  { path: 'search/searchList', component: SearchListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
