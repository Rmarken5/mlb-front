import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterNameComponent } from './batter-name.component';

describe('BatterNameComponent', () => {
  let component: BatterNameComponent;
  let fixture: ComponentFixture<BatterNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatterNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatterNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
