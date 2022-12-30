/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoaisanphamComponent } from './loaisanpham.component';

describe('LoaisanphamComponent', () => {
  let component: LoaisanphamComponent;
  let fixture: ComponentFixture<LoaisanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaisanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaisanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
