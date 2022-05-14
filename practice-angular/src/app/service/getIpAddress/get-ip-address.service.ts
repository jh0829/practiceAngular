import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class GetIpAddressService {

  constructor() { }

  async getAddress(){
    // const ngrok = require('ngrok');
    // const url = await ngrok.connect(); 
    // await ngrok.authtoken(token);
    // (async function() {
    //   const url = await ngrok.connect();
    // })();

    // return url;
    // express = require("express");
    // const port = 8080;

    // const app = express();

    // app.get("/", (req, res) => {
    //   res.send("Hello World!");
    // });

    // ngrok.connect(port).then((url) => {
    //   app.listen(port, () => {
    //     console.log(`Example app listening at http://localhost:${port}`);
    //     console.log(`Example app listening at ${url}`);
    //   });
    // });
  //   connectNgrok().then(url => {
  //     console.log('URL : ' + url);
  // });
    
  }

  // ngrokを非同期で起動
//   async function connectNgrok() {
//   let url = await ngrok.connect();
//   return url;
// }
}
