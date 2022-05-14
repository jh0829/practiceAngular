import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueSharedService {
  //　検索項目
  searchValue = {};
  //  遷移先ページ
  pageAdd = ""

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

}
