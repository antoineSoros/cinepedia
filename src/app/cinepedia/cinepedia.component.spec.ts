import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinepediaComponent } from './cinepedia.component';

describe('CinepediaComponent', () => {
  let component: CinepediaComponent;
  let fixture: ComponentFixture<CinepediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinepediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinepediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
