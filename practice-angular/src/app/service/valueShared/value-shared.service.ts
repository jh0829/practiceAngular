import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueSharedService {
  //　検索項目
  searchValue ={};

  setSearchValue(searchvalue:any){
    this.searchValue = searchvalue;
  }

  getSerachValue(){
    return this.searchValue;
  }
}
