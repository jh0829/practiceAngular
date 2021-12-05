import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// 検索項目を作成するサービスクラス
export class DataSelectService {

  constructor() { }

  /**
   * 取得結果をJSONに格納
   * @param searchMenu 複数選択肢あるメニュー項目
   * @param searchJson 格納予定JSON
   * @returns　全ての検索項目
   */
  createSearchMenu(searchMenu:Array<string>,searchJson:any){
    //取得した検索項目分ループする
    for(let key in searchMenu){
      console.log(key)
      searchJson[key][0].value = searchMenu[key]
    }
    return searchJson;
  }
}
