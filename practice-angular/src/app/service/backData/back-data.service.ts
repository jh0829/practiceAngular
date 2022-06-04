import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as https from "https";

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
    console.log(url)
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

  /**
   * node.jsで検索実施（POST)
   * @param getUrl 
   * @param searchJson 
   */
  async searchList(getUrl:string,searchJson:any){
    console.log("ここまで処理が来ているか",this.flaskIp + getUrl)
    console.log("検索条件",searchJson)
    try {
      // 👇️ const response: Response
      const response = await fetch(this.flaskIp + getUrl, {
        method: 'POST',
        body: searchJson,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      // 👇️ const result: CreateUserResponse
      const result = (await response.json()) 
      // as CreateUserResponse;
  
      console.log('result is: ', JSON.stringify(result, null, 4));
  
      return result;
    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
    
    //const json = searchJson
      // fetch(this.flaskIp + getUrl, {

      //   method: 'POST',
      //   headers: {
      //    'content-type': 'application/json',
      //   },
      //   body: JSON.stringify(json),

      // }).then(response => {
      //  return response.json();
      // }).then(res => {
      //  console.log(res.items[0].volumeInfo.title);
      //    }).catch(error => {
      //      console.log(error);
      // });


    // const data = searchJson
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // };
    // const url = this.flaskIp + getUrl
    // console.log(url)
    // const request = https.request(url, options);
    // request.write(data);
    // request.end();

  }
}
