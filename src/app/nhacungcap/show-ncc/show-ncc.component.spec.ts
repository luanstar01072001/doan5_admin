import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNccComponent } from './show-ncc.component';

describe('ShowNccComponent', () => {
  let component: ShowNccComponent;
  let fixture: ComponentFixture<ShowNccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
