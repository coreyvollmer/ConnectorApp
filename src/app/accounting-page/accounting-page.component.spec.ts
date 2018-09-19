import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingPageComponent } from './accounting-page.component';

describe('AccountingPageComponent', () => {
  let component: AccountingPageComponent;
  let fixture: ComponentFixture<AccountingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
