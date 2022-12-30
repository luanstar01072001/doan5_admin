import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditKhComponent } from './add-edit-kh.component';

describe('AddEditKhComponent', () => {
  let component: AddEditKhComponent;
  let fixture: ComponentFixture<AddEditKhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditKhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditKhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
