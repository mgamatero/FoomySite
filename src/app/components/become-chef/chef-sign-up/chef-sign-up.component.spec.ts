import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefSignUpComponent } from './chef-sign-up.component';

describe('ChefSignUpComponent', () => {
  let component: ChefSignUpComponent;
  let fixture: ComponentFixture<ChefSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
