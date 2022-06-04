import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { ValueSharedService } from 'src/app/service/valueShared/value-shared.service';
import { DataSaveService } from 'src/app/service/dataSave/data-save.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DepFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'search-list-user',
  templateUrl: './search-list-user.component.html',
  styleUrls: ['./search-list-user.component.css']
})
export class SearchListUserComponent implements OnInit {
  pageAdd = 'userList'
  searchList = {}

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
  }
  
  /**
   * ユーザデータ検索
   */
  searchUser(){
    console.log('検索開始')
    this.searchList = this.valueSharedService.getSerachValue()
    this.ds.getSearchDataList(this.searchList)
  }

}
