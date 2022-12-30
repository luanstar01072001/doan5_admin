import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDhComponent } from './show-dh.component';

describe('ShowDhComponent', () => {
  let component: ShowDhComponent;
  let fixture: ComponentFixture<ShowDhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
