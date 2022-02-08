import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavModalComponent } from './add-to-fav-modal.component';

describe('AddToFavModalComponent', () => {
  let component: AddToFavModalComponent;
  let fixture: ComponentFixture<AddToFavModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToFavModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFavModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
