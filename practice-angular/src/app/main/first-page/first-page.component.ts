import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'firstPage',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(){
    console.log("onClickEvent");
  }

}
