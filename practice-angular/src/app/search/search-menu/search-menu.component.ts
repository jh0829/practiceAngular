import { Component, OnInit } from '@angular/core';
import { DataSaveService } from 'src/app/service/dataSave/data-save.service';
import { DataSelectService } from 'src/app/service/dataSelect/data-select.service'
import { Input } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module'

import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import jsonSearchMenu from 'src/app/json/searchMenu.json';

/**
 * 検索項目を作成するクラス
 */
@Component({
  selector: 'search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit {

  //@Input() selectMenu: string;
  // html 反映用
  htmlString = "";
  resultSql = Array();
  searchMenu = {};
  selectedMenu ="";

  constructor(
    private dss: DataSaveService,
    private dsele: DataSelectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // 選択したメニューを取得
    const selectMenu = this.route.snapshot.paramMap.get('selectedMenu');
    switch (selectMenu){
      case 'userList':
        this.UserList(selectMenu);
      break
      default:
        console.log('その他')
    }
  }

  UserList(selectMenu:string){
    console.log('start choseUserList');
    this.searchMenu  =this.dss.getUserListSearchMenuData(selectMenu,jsonSearchMenu);
    console.log(this.searchMenu);
    // 選択したメニュー
    //this.selectedMenu = selectMenu
    // メニューに対するJSON
    //this.searchMenu = result[selectMenu];
  }

  // メニューを作成

}


    // console.log('getSearchMenu')
    // var result =this.dss.getSearchLiveData()
    // var keyValue  = Object.keys(result[0][0])
    // var jRe = {}
    // var cpyJRe = Array()
    // console.log(keyValue)
    // // selectの取得結果分ループさせる。
    // for(var key of Object.keys(result)){
    //   // JSONファイル形式にする
    //   jRe[key] = search
    //   console.log(search)
    //   //  for(var val of keyValue){
    //   // jRe[key].userList[0][val].value = result[key][0][val]
    //   //  }
    //   //  // textにしてからJSONに戻す
    //   //  cpyJRe[key] = JSON.parse(JSON.stringify(jRe[key], null, 2))
    // }
    // console.log(cpyJRe)


