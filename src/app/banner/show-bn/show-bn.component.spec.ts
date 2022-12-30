import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBnComponent } from './show-bn.component';

describe('ShowBnComponent', () => {
  let component: ShowBnComponent;
  let fixture: ComponentFixture<ShowBnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
