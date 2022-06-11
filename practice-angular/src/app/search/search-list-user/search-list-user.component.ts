import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { ValueSharedService } from 'src/app/service/valueShared/value-shared.service';
import { DataSaveService } from 'src/app/service/dataSave/data-save.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DepFlags } from '@angular/compiler/src/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'search-list-user',
  templateUrl: './search-list-user.component.html',
  styleUrls: ['./search-list-user.component.css']
})
// export interface PeriodicElement {}
// const ELEMENT_DATA: PeriodicElement[] = []

export class SearchListUserComponent implements OnInit {

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  pageAdd = 'userList'
  searchList = {}
  pageAdress = ''
  result = {}

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
    // this.dataSource.paginator = this.paginator
  }
  
  /**
   * ユーザデータ検索
   */
  async searchUser(jsonSearchResult:any){
    console.log('検索開始')
    this.searchList = this.valueSharedService.getSerachValue()
    this.result = await  this.ds.getSearchDataList(this.searchList,jsonSearchResult)
    console.log('検索結果はこちら',this.result)
    // PeriodicElement
  }

}
