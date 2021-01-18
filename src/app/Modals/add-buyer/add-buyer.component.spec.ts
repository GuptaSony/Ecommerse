import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyerComponent } from './add-buyer.component';

describe('AddBuyerComponent', () => {
  let component: AddBuyerComponent;
  let fixture: ComponentFixture<AddBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
