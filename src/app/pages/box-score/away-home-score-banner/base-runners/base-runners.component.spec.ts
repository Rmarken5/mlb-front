import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRunnersComponent } from './base-runners.component';

describe('BaseRunnersComponent', () => {
  let component: BaseRunnersComponent;
  let fixture: ComponentFixture<BaseRunnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseRunnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseRunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
