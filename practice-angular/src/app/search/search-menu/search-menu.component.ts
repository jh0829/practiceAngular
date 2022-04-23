import { Component, OnInit } from '@angular/core';
import { DataSaveService } from 'src/app/service/dataSave/data-save.service';
import { DataSelectService } from 'src/app/service/dataSelect/data-select.service';
import { MakeFormService } from 'src/app/service/makeForm/make-form.service';
import { ValueSharedService } from 'src/app/service/valueShared/value-shared.service';

import { Input } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module'

import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import jsonSearchMenu from 'src/app/json/searchMenu.json';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
/**
 * 検索項目を作成するクラス
 */
@Component({
  selector: 'search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit {
  // form
  @Input()
  searchForm: FormGroup;

  //@Input() selectMenu: string;
  // html 反映用
  htmlString = "";
  resultSql = Array();
  searchMenu = {};
  selectedMenu = "";

  public ngxControl = new FormControl();
  constructor(
    private dss: DataSaveService,
    private dsele: DataSelectService,
    private makeForm: MakeFormService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private valueSharedService: ValueSharedService
  ) {
    // form
    this.searchForm = this.fb.group({});
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

  ngOnInit(): void {
  }

  UserList(selectMenu:string){
    console.log('start choseUserList');
    this.searchMenu = this.dss.getUserListSearchMenuData(selectMenu,jsonSearchMenu);
    //this.searchForm = this.makeForm.makeForm(jsonSearchMenu,this.searchForm);
    this.searchForm = this.makeForm.makeForm(jsonSearchMenu,this.searchForm,selectMenu);
    console.log('検索メニュー用',this.searchMenu);
    console.log('Form',this.searchForm);
    // 選択したメニュー
    //this.selectedMenu = selectMenu
    // メニューに対するJSON
    //this.searchMenu = result[selectMenu];
  }

  // 検索ボタン押下
  searchList(){
    console.log('中身確認',this.searchForm.getRawValue())
    // 検索項目をセット
    this.valueSharedService.setSearchValue(this.searchForm.getRawValue())
  }

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


