import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShamComponent } from './sham.component';

describe('ShamComponent', () => {
  let component: ShamComponent;
  let fixture: ComponentFixture<ShamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShamComponent]
    });
    fixture = TestBed.createComponent(ShamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
