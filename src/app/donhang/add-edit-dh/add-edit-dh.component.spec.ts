import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDhComponent } from './add-edit-dh.component';

describe('AddEditDhComponent', () => {
  let component: AddEditDhComponent;
  let fixture: ComponentFixture<AddEditDhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
