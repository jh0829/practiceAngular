import { Injectable,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackDataService {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(){
  }

  TestUri : string = ""


  getTestData(){
    console.log("start getTestData");
    const url = "http://127.0.0.1:5000/dataTest";
    this.http.post(url, "",
    {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
     }
    ).subscribe(
        response => {
          console.log("success"); // 成功したときにする処理
            },
        error => {
          console.log("error!!");
        }
    );
  }
}
