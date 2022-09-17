import { Injectable } from '@angular/core';
import { ValueSharedService } from 'src/app/service/valueShared/value-shared.service';

@Injectable({
  providedIn: 'root'
})
// 検索項目を作成するサービスクラス
export class DataSelectService {
  reJson:Array<any> = []

  constructor(
    private shareData:ValueSharedService,
  ) { }

  /**
   * 取得結果をJSONに格納
   * @param searchMenu 複数選択肢あるメニュー項目
   * @param searchJson 格納予定JSON
   * @returns　全ての検索項目
   */
  createSearchMenu(searchMenu:Array<string>,searchJson:any){
    //取得した検索項目分ループする
    for(let key in searchMenu){
      searchJson[key].value = searchMenu[key]
    }
    return searchJson;
  }

  /**
   * 一覧結果をJSONに格納
   * @param searchMenu 複数選択肢あるメニュー項目
   * @param resultJson 格納予定JSON
   * @returns　全ての検索項目
   */
   createSearchResult(searchResult:Array<string>,resultJson:any){

    //取得した検索項目分ループする
    var copyDashJson: any = []
    searchResult.forEach( (elm:any, num:any) => {
      const copyJson = {}
      copyJson[num] =  resultJson
      Object.keys(copyJson[num]).forEach( (key:any) =>{
        copyJson[num][key].value = elm[key]
      });
      // DEEP COPY
      copyDashJson[num] = JSON.parse(JSON.stringify(copyJson));
    });
    return copyDashJson
  }
}
