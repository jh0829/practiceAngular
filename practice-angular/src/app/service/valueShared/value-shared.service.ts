import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueSharedService {
  //　検索項目
  searchValue = {}
  //  遷移先ページ
  pageAdd = ""
  //　検索結果
  searchResult = {}

  setSearchValue(searchvalue:any){
    this.searchValue = searchvalue;
  }

  getSerachValue(){
    return this.searchValue;
  }

  setPageAdd(pageadd:any){
    this.pageAdd = pageadd;
  }

  getPageAdd(){
    return this.pageAdd
  }

  setSearchResult(searchResult:any,num:any,key:any,elm:any,cunt:Number){
    console.log('cunt,num',cunt,num)
    if(cunt === 0){
      this.searchResult[num] = searchResult
    }
    this.searchResult[num][key].value = elm
  }

  getSearchResult(){
    return this.searchResult
  }

}
