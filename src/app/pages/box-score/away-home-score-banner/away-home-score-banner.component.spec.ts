import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwayHomeScoreBannerComponent } from './away-home-score-banner.component';

describe('AwayHomeScoreBannerComponent', () => {
  let component: AwayHomeScoreBannerComponent;
  let fixture: ComponentFixture<AwayHomeScoreBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwayHomeScoreBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwayHomeScoreBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
