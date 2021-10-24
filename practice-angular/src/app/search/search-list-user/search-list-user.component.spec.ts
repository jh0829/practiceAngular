import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListUserComponent } from './search-list-user.component';

describe('SearchListUserComponent', () => {
  let component: SearchListUserComponent;
  let fixture: ComponentFixture<SearchListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
