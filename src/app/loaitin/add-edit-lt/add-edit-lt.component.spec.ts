import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLtComponent } from './add-edit-lt.component';

describe('AddEditLtComponent', () => {
  let component: AddEditLtComponent;
  let fixture: ComponentFixture<AddEditLtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditLtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
