import { Injectable } from '@angular/core';
import { BackDataService } from 'src/app/service/backData/back-data.service';
import { DataSelectService } from 'src/app/service/dataSelect/data-select.service';
import { ValueSharedService } from 'src/app/service/valueShared/value-shared.service';

@Injectable({
  providedIn: 'root'
})
export class DataSaveService {

  constructor(
    private bds: BackDataService,
    private dataSelect:DataSelectService,
    private shareData:ValueSharedService
  ) { }

  uri : string = ""
    searchMenu: Array<string> = []

/**
 * 実験用１
 * @returns
 */
  getBackData() {
    console.log("getBackData Start")
    this.uri = "getTestData/dataTest";
    var data = this.bds.getTestData(this.uri)
    return data;
  }

  /**
   * 実験用２
   * @param json
   * @returns
   */
  postBackData(json:any) {
    console.log("getBackData Start")
    this.uri = "getTestData/postData";
    var data = this.bds.getPosttData(this.uri,json)
    return data;
  }

  /**
   * 実験用３
   * @returns
   */
  getSQLData() {
    console.log("getSQLData Start")
    this.uri = "getTestData/sqlData";
    var data = this.bds.getTestData(this.uri)
    return data;
  }

  /**
   * ユーザ検索メニュー取得処理
   * @param selectMenu 選択した画面のID
   * @param searchJson 検索メニュー用のJSON
   * @returns
   */
   getUserListSearchMenuData(selectMenu:string,searchJson:any) {
    console.log("getSearchLiveData Start")
    // 結果を取得し、メニュー用jsonに組み込む
    // listの場合はAPIを実施
    console.log(searchJson[selectMenu])
    let viewSearchMenu = searchJson[selectMenu]
    //JSONの検索メニュー分だけfor文を回す
    for(let key in searchJson[selectMenu]){
      // APIに繋がない検索項目は除外
        if(searchJson[selectMenu][key].view !="text"){
          this.uri = "getSearchData/" + key
          console.log(this.uri)
          this.searchMenu[key] = this.bds.getTestData(this.uri);
        }
    }
    // APIの実施結果を格納する
    viewSearchMenu = this.dataSelect.createSearchMenu(this.searchMenu,searchJson[selectMenu]);
    console.log(viewSearchMenu)
    return viewSearchMenu;
  }

  /**
   * 検索処理
   * @param searchList 
   */
  getSearchDataList(searchList:any){
    // 検索するページID取得
    const searchPage = "getSearchData/" + this.shareData.getPageAdd();
    // 検索項目とページの取得に成功
    this.bds.searchList(searchPage,searchList)

  }
}
