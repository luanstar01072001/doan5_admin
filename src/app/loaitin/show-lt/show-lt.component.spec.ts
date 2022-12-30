import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLtComponent } from './show-lt.component';

describe('ShowLtComponent', () => {
  let component: ShowLtComponent;
  let fixture: ComponentFixture<ShowLtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
