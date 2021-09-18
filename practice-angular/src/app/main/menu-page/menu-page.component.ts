import { Component, OnInit } from '@angular/core';
import { DataSaveService } from 'src/app/service/dataSave/data-save.service';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {

  htmlString = "";

  constructor(
    private dss: DataSaveService
    ) {}

  ngOnInit(): void {}

  getBackTestData() {
    console.log("getBackTestData Start")
    var result =this.dss.getBackData()
    var key  = Object.keys(result)
    for(let i = 0; i < key.length; i++){
      this.htmlString = result[key[i]]
    }
    console.log("getBackTestData END")

  }

  getAndSendData() {
    console.log("getAndSendData Start")
    console.log("getBackTestData END")

  }
}
