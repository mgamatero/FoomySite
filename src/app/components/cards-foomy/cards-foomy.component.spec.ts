import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFoomyComponent } from './cards-foomy.component';

describe('CardsFoomyComponent', () => {
  let component: CardsFoomyComponent;
  let fixture: ComponentFixture<CardsFoomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsFoomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsFoomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
