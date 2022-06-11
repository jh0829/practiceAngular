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
   async createSearchResult(searchResult:Array<any>,resultJson:any){
   const  reJson = {}
    //取得した検索項目分ループする
    for(let key in searchResult){
      const res = {}
      for(let inKey in searchResult[key]){
        resultJson[inKey].value = searchResult[key][inKey]
        res[inKey] = resultJson[inKey].value
      }
      reJson[key] = res
    }
    return reJson
  }
}
