import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HekkComponent } from './hekk.component';

describe('HekkComponent', () => {
  let component: HekkComponent;
  let fixture: ComponentFixture<HekkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HekkComponent]
    });
    fixture = TestBed.createComponent(HekkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
