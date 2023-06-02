import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcbComponent } from './jcb.component';

describe('JcbComponent', () => {
  let component: JcbComponent;
  let fixture: ComponentFixture<JcbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JcbComponent]
    });
    fixture = TestBed.createComponent(JcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
