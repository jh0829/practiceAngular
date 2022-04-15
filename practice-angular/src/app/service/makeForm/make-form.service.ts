import { Injectable } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MakeFormService {

  constructor() { }

  makeForm(searchMenu:any,searchForm:any,selectMenu:string){
    Object.keys(searchMenu[selectMenu]).map(key =>
      searchForm.controls[key] = new FormControl('', Validators.required)
      )
      return searchForm;
  }
}
