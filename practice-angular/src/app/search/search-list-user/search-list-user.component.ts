import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { ValueSharedService } from 'src/app/service/valueShared/value-shared.service';
import { DataSaveService } from 'src/app/service/dataSave/data-save.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DepFlags } from '@angular/compiler/src/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
var ELEMENT_DATA:[] = []

@Component({
  selector: 'search-list-user',
  templateUrl: './search-list-user.component.html',
  styleUrls: ['./search-list-user.component.css']
})

export class SearchListUserComponent implements OnInit {

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  searchFlg = false
  pageAdd = 'userList'
  searchList = {}
  pageAdress = ''
  result = {}
  headerName = {}
  resultValue = []
  dataSource = new MatTableDataSource(ELEMENT_DATA)

  constructor(
    private route: ActivatedRoute,
    private valueSharedService: ValueSharedService,
    private fb: FormBuilder,
    private ds: DataSaveService,
  ) {
    console.log('searchUser active')
    valueSharedService.setPageAdd(this.pageAdd)
   }

  ngOnInit(): void {
    this.searchFlg = false
    // this.dataSource.paginator = this.paginator
  }
  
  /**
   * ユーザデータ検索
   */
  async searchUser(jsonSearchResult:any){
    console.log('検索開始')
    this.searchFlg = true
    this.searchList = this.valueSharedService.getSerachValue()
    this.result = await  this.ds.getSearchDataList(this.searchList,jsonSearchResult)
    console.log('検索結果はこちら',this.result)
    // ヘッダキー取得
    const headerKey = Object.keys(this.result[0][0])
    // ヘッダ名を取得する
    for(let nm in headerKey){
      this.headerName[nm] = (this.result[0][0][headerKey[nm]].name)
    }
    console.log('keys',this.headerName)
    // 検索結果の取得
      for(let renum in this.result){
       this.resultValue[renum] = this.result[renum][renum]
      } 
    console.log('val',this.resultValue)
    //ELEMENT_DATA = this.resultValue
    this.dataSource = new MatTableDataSource(this.resultValue);
  }
  
}
