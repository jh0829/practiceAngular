import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackDataService {
  constructor(private http: HttpClient) {}

  backIP='';
  flaskIp = this.backIP ||'http://127.0.0.1:5000/'
  
  ngOnInit() {}

  /**
   * flaskからデータ取得（GET）
   * @param getUri
   * @returns
   */
  getTestData(getUri: string) {
    console.log('start getTestData');
    const url = this.flaskIp + getUri;
    var request = new XMLHttpRequest();
    // `false` で同期リクエストになる
    request.open('GET', url, false);
    request.setRequestHeader("Content-Type", "application/json");
    try {
      request.send(null);
      if (request.status === 200) {
        // JSON変換
        var resultData = JSON.parse(request.responseText);
        console.log(resultData);
        return resultData;
      } else {
        console.log('error!');
      }
    } catch {
      console.log('接続エラー');
      var noData = { result: '接続エラー' };
      return noData;
    }
  }

  /**
   * flaskからデータ取得（POST）
   * @param getUri
   * @param sendData
   * @returns
   */
  getPosttData(getUri: string, sendData: any) {
    console.log('start getPosttData');
    const url = this.flaskIp + getUri;
    var request = new XMLHttpRequest();
    // `false` で同期リクエストになる
    request.open('POST', url, false);
    request.setRequestHeader("Content-Type", "application/json");
    try {
      // JSONデータを送信する
      request.send(sendData);
      if (request.status === 200) {
        // JSON変換
        var resultData = JSON.parse(request.responseText);
        return resultData;
      } else {
        console.log('error!');
      }
    } catch {
      console.log('接続エラー');
      var noData = { result: '接続エラー' };
      return noData;
    }
  }
}
