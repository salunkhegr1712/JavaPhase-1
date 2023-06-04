import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMsgComponent } from './main-msg.component';

describe('MainMsgComponent', () => {
  let component: MainMsgComponent;
  let fixture: ComponentFixture<MainMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMsgComponent]
    });
    fixture = TestBed.createComponent(MainMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
