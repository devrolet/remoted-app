import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBtnComponent } from './ad-btn.component';

describe('AdBtnComponent', () => {
  let component: AdBtnComponent;
  let fixture: ComponentFixture<AdBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
