import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBnComponent } from './add-edit-bn.component';

describe('AddEditBnComponent', () => {
  let component: AddEditBnComponent;
  let fixture: ComponentFixture<AddEditBnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditBnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
