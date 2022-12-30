import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCtdhComponent } from './show-ctdh.component';

describe('ShowCtdhComponent', () => {
  let component: ShowCtdhComponent;
  let fixture: ComponentFixture<ShowCtdhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCtdhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCtdhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
