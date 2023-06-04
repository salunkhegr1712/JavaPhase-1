import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShamMsgComponent } from './sham-msg.component';

describe('ShamMsgComponent', () => {
  let component: ShamMsgComponent;
  let fixture: ComponentFixture<ShamMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShamMsgComponent]
    });
    fixture = TestBed.createComponent(ShamMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
