import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamToggleComponent } from './team-toggle.component';

describe('TeamToggleComponent', () => {
  let component: TeamToggleComponent;
  let fixture: ComponentFixture<TeamToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
