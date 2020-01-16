import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefAddPhotoComponent } from './chef-add-photo.component';

describe('ChefAddPhotoComponent', () => {
  let component: ChefAddPhotoComponent;
  let fixture: ComponentFixture<ChefAddPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefAddPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefAddPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
