import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBatterComponent } from './current-batter.component';

describe('CurrentBatterComponent', () => {
  let component: CurrentBatterComponent;
  let fixture: ComponentFixture<CurrentBatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
