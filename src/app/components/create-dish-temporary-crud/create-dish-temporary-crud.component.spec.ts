import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDishTemporaryCRUDComponent } from './create-dish-temporary-crud.component';

describe('CreateDishTemporaryCRUDComponent', () => {
  let component: CreateDishTemporaryCRUDComponent;
  let fixture: ComponentFixture<CreateDishTemporaryCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDishTemporaryCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDishTemporaryCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
