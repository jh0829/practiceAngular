import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackDataService {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getTestData(getUri: string) {
    console.log('start getTestData');
    const url = 'http://127.0.0.1:5000/' + getUri;
    var request = new XMLHttpRequest();
    // `false` で同期リクエストになる
    request.open('GET', url, false);
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
}
