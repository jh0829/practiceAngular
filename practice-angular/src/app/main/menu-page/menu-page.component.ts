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
    //【実験】渡すデータを作成
    var arrayListTest = {"name":"testTaro","age":"15"};
    var json = JSON.stringify(arrayListTest);

    var result =this.dss.postBackData(json)
    var key  = Object.keys(result)
    for(let i = 0; i < key.length; i++){
      this.htmlString = result[key[i]]
      console.log(this.htmlString)
    }
    console.log("getBackTestData END")

  }

  getSQLData(){
    console.log("getSQLData Start")
    var result =this.dss.getSQLData()
    console.log(result)
    var key  = Object.keys(result)
    for(let i = 0; i < key.length; i++){
      Object.keys(result[i]).forEach(function(key) {
        console.log(key+":"+result[i][key]['name']);
      });
      // 0は固定
      this.htmlString = result[i][0]['name']
    }
    console.log("getBackTestData END")

  }

  public onClickSearch(){
    console.log("onClickSearch");
  }
}
