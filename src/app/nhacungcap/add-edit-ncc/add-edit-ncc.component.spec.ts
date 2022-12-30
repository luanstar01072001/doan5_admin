import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNccComponent } from './add-edit-ncc.component';

describe('AddEditNccComponent', () => {
  let component: AddEditNccComponent;
  let fixture: ComponentFixture<AddEditNccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditNccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
