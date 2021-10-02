import { Injectable } from '@angular/core';
import { userInfo } from 'os';
import { BackDataService } from 'src/app/service/backData/back-data.service';


@Injectable({
  providedIn: 'root'
})
export class DataSaveService {

  constructor(
    private bds: BackDataService
  ) { }

  uri : string = ""

  getBackData() {
    console.log("getBackData Start")
    this.uri = "getTestData/dataTest";
    var data = this.bds.getTestData(this.uri)
    return data;
  }

  postBackData(json:any) {
    console.log("getBackData Start")
    this.uri = "getTestData/postData";
    var data = this.bds.getPosttData(this.uri,json)
    return data;
  }

  getSQLData() {
    console.log("getSQLData Start")
    this.uri = "getTestData/sqlData";
    var data = this.bds.getTestData(this.uri)
    return data;
  }
}
