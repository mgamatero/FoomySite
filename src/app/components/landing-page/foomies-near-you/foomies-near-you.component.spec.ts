import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoomiesNearYouComponent } from './foomies-near-you.component';

describe('FoomiesNearYouComponent', () => {
  let component: FoomiesNearYouComponent;
  let fixture: ComponentFixture<FoomiesNearYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoomiesNearYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoomiesNearYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
