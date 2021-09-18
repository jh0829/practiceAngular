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
    this.uri = "dataTest";
    var data = this.bds.getTestData(this.uri)
    return data;
  }
}
