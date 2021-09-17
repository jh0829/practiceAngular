import { Component, OnInit } from '@angular/core';
import { BackDataService } from 'src/app/service/backData/back-data.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {
  constructor(private bds: BackDataService) {}

  ngOnInit(): void {}

  getBackData() {
    this.bds.getTestData();
  }
}
