import { Component, OnInit } from '@angular/core';
import { DataSaveService } from 'src/app/service/dataSave/data-save.service';
import test from 'src/app/json/test.json';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {

  // html 反映用
  htmlString = "";
  resultSql = Array();
  showTable = false;
  showMessage = false;

  constructor(
    private dss: DataSaveService
    ) {}

  ngOnInit(): void {
    this.showTable = false;
    this.showMessage = false;
  }

  getBackTestData() {
    this.ngOnInit()
    console.log("getBackTestData Start")
    var result =this.dss.getBackData()
    var key  = Object.keys(result)
    for(let i = 0; i < key.length; i++){
      this.htmlString = result[key[i]]
    }
    this.showMessage = true
    console.log("getBackTestData END")
  }

  getAndSendData() {
    console.log("getAndSendData Start")
    this.ngOnInit()
    //【実験】渡すデータを作成
    var arrayListTest = {"name":"testTaro","age":"15"};
    var json = JSON.stringify(arrayListTest);

    var result =this.dss.postBackData(json)
    var key  = Object.keys(result)
    for(let i = 0; i < key.length; i++){
      this.htmlString = result[key[i]]
      console.log(this.htmlString)
    }
    this.showMessage = true
    console.log("getBackTestData END")
  }

  getSQLData(){
    console.log("getSQLData Start")
    this.ngOnInit()
    var result =this.dss.getSQLData()
    var keyValue  = Object.keys(result[0][0])
    var jRe = {}
    var cpyJRe = Array()
    console.log(keyValue)
    // selectの取得結果分ループさせる。
    for(var key of Object.keys(result)){
      // JSONファイル形式にする
      jRe[key] = test
       for(var val of keyValue){
      jRe[key].testUser[0][val].value = result[key][0][val]
       }
       // textにしてからJSONに戻す
       cpyJRe[key] = JSON.parse(JSON.stringify(jRe[key], null, 2))
    }
    console.log(cpyJRe)
    console.log('-----------------------------')
    for(var a =0; a < cpyJRe.length; a++){
      console.log(cpyJRe[a].testUser[0].name.value)
    }
    console.log('-----------------------------')
    //this.resultString = cpyJRe[0].testUser[0].name.value
    this.resultSql = cpyJRe
    this.showTable = true
    console.log("getBackTestData END")
  }

  public onClickSearch(){
    console.log("onClickSearch");
  }
}
