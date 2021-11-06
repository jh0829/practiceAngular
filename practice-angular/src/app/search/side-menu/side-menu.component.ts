import { Component, OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SearchMenuComponent} from '../search-menu/search-menu.component'

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit{

  @ViewChild(SearchMenuComponent)searchMenu!: string;

  ngOnInit() {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
    ) {}

  onSearchListUser(selectMenu:string) {
    this.searchMenu = selectMenu;
    console.log(this.searchMenu)
    this.router.navigate(['main/side/user',{selectedMenu:this.searchMenu}]);
  }
}
