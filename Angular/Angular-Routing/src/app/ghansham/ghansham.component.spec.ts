import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhanshamComponent } from './ghansham.component';

describe('GhanshamComponent', () => {
  let component: GhanshamComponent;
  let fixture: ComponentFixture<GhanshamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GhanshamComponent]
    });
    fixture = TestBed.createComponent(GhanshamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
