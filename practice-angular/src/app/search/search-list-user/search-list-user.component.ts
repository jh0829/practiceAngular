import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ValueSharedService } from 'src/app/service/valueShared/value-shared.service';
import { DataSaveService } from 'src/app/service/dataSave/data-save.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface EsppData  {
  username: string;
  jobname: string;
}

@Component({
  selector: 'search-list-user',
  templateUrl: './search-list-user.component.html',
  styleUrls: ['./search-list-user.component.css']
})

export class SearchListUserComponent implements OnInit {

  //実験
  esppForm: FormGroup;
  esppDataList: EsppData[] = []
  dataSource: MatTableDataSource<EsppData>;
  searchFlg = false
  pageAdd = 'userList'
  searchList = {}
  pageAdress = ''
  result = {}
  headerName = {}
  resultValue = []
  viewValue = {}
  displayedColumns: string[] = [
    'username',
    'jobname'
  ];

  constructor(
    private route: ActivatedRoute,
    private valueSharedService: ValueSharedService,
    private fb: FormBuilder,
    private ds: DataSaveService,
  ) {
    valueSharedService.setPageAdd(this.pageAdd)
    this.dataSource = new MatTableDataSource<EsppData>(this.esppDataList);
    this.esppForm = this.fb.group({
      username: ['', Validators.required],
      jobname: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.searchFlg = false;
  }
  
  /**
   * ユーザデータ検索
   */
  async searchUser(jsonSearchResult:any){
    // 初期化
    this.esppDataList = []
    this.result = []
    this.resultValue = []
    this.viewValue = [] 
    console.log('検索開始')
    this.searchFlg = true
    this.searchList = this.valueSharedService.getSerachValue()
    this.result = await  this.ds.getSearchDataList(this.searchList,jsonSearchResult)
    console.log('検索結果はこちら',this.result)
    console.log("header",this.headerName)
    // 検索結果の取得
    for(let renum in this.result){
      this.resultValue[renum] = this.result[renum][renum]
    }
    
    // materialSet用の形にする 
    for(let key in this.resultValue){
      const setValue = {}
      for(let inKey in this.resultValue[key]){
        setValue[inKey] = (this.resultValue[key][inKey]["value"])
      }
      this.viewValue[key] =JSON.parse(JSON.stringify(setValue));
    }
    console.log('最終形態',this.viewValue)
    // 各取得結果を格納する
    for(let val in this.viewValue){
      this.esppDataList.push({
        username:this.viewValue[val].username,
        jobname:this.viewValue[val].jobname,
      }) 

    }
    // 画面表示用の変数に格納
    this.dataSource = new MatTableDataSource<EsppData>(this.esppDataList)    
  }
  
}
