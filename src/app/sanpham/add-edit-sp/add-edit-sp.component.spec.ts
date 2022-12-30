import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSpComponent } from './add-edit-sp.component';

describe('AddEditSpComponent', () => {
  let component: AddEditSpComponent;
  let fixture: ComponentFixture<AddEditSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
