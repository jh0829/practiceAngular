import { Injectable,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ConstantPool } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class BackDataService {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(){
  }

  getTestData(getUri : string){
    console.log("start getTestData");
    const url = "http://127.0.0.1:5000/" + getUri;
    var request = new XMLHttpRequest();
    // `false` で同期リクエストになる
    request.open('GET', url, false);
    request.send(null);
    if (request.status === 200) {
      // JSON変換
      var resultData = JSON.parse(request.responseText)
      console.log(resultData)
      return resultData;
    }
  }
}
