import { Injectable } from '@angular/core';

// REST クライアント実装ののためのサービスを import ( 下記は Angular 5.0.0 で非推奨となった )
//import { Http } from '@angular/http';

// REST クライアント実装ののためのサービスを import ( Angular 5.0.0 以降はこちらを使う )
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpClientService {

  // 下記のコードは非推奨
  /**
   * リクエストヘッダを定義
   *
   * @private
   * @memberof HttpClientService
   */
  //private headers: any = new Headers({'Content-Type': 'application/json'});

  // `Headers` の代わりに `HttpHeaders` を利用する
  // またコメントにあるとおり、 `Authorization` を設定できるように `httpOptions` としてオブジェクトでラップしている
  // 参考
  // https://angular.jp/guide/http#%E3%83%98%E3%83%83%E3%83%80%E3%83%BC%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B
  /**
   * Http クライアントを実行する際のヘッダオプション
   * @private
   * @type {*}
   * @memberof HttpClientService
   * @description
   * 認証トークンを使用するために `httpOptions` としてオブジェクトを用意した。
   */
  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    //
    // レスポンスにヘッダ情報を入れるための設定
    // https://angular.io/guide/http#reading-the-full-response
    //
    observe: 'response',  // ⇐ これを追加
    //
    // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
    // ( ここで用意しなくても追加できるけど... )
    body: null
  };

  /**
   * RST-API 実行時に指定する URL
   *
   * バックエンドは Express で実装し、ポート番号「3000」で待ち受けているため、
   * そのまま指定すると CORS でエラーになる
   * それを回避するため、ここではフロントエンドのポート番号「4200」を指定し、
   * Angular CLI のリバースプロキシを利用してバックエンドとの通信を実現する
   *
   * @private
   * @memberof HttpClientService
   */
  private host: string = 'http://localhost:4200/app';

  /**
   * コンストラクタ. HttpClientService のインスタンスを生成する
   *
   * @param {Http} http Httpサービスを DI する
   * @memberof HttpClientService
   */
  constructor(private http: HttpClient) {
    // `Authorization` に `Bearer トークン` をセットする
    this.setAuthorization('my-auth-token');
  }

  /**
   * HTTP GET メソッドを実行する
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   * @returns {Promise<any[]>}
   * @memberof HttpClientService
   */
  public get(): Promise<any[]> {
    return this.http.get(this.host + '/message/get', this.httpOptions)
    .toPromise()
    .then((res) => {
      // response の型は any ではなく class で型を定義した方が良いが
      // ここでは簡便さから any としておく

      // @angular/http では json() でパースする必要があったが､ @angular/common/http では不要となった
      //const response: any = res.json();
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  /**
   * REST-API 実行時のエラーハンドラ
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   * @private
   * @param {any} err エラー情報
   * @memberof HttpClientService
   */
  private errorHandler(err: { message: any; }) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }

  /**
   * Authorizatino に認証トークンを設定しする
   *
   * @param {string} token 認証トークン
   * @returns {void}
   * @memberof HttpClientService
   * @description
   * トークンを動的に設定できるようメソッド化している
   * Bearer トークンをヘッダに設定したい場合はこのメソッドを利用する
   */
  public setAuthorization(token: string = ''): void {
    if (!token) {
      return;
    }
    const bearerToken: string = `Bearer ${token}`;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', bearerToken);
  }
}
