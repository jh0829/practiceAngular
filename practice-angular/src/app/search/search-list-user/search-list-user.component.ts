import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { ValueSharedService } from 'src/app/service/valueShared/value-shared.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'search-list-user',
  templateUrl: './search-list-user.component.html',
  styleUrls: ['./search-list-user.component.css']
})
export class SearchListUserComponent implements OnInit {
  pageAdd = 'userList'

  constructor(
    private route: ActivatedRoute,
    private valueSharedService: ValueSharedService,
    private fb: FormBuilder,
  ) {
    console.log('searchUser active')
    valueSharedService.setPageAdd(this.pageAdd)
   }

  ngOnInit(): void {
  }
  
  searchUser(){
    console.log('検索開始')
  }

}
