import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcComponent } from './jc.component';

describe('JcComponent', () => {
  let component: JcComponent;
  let fixture: ComponentFixture<JcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JcComponent]
    });
    fixture = TestBed.createComponent(JcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
