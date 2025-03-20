import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLunchComponent } from './check-lunch.component';

describe('CheckLunchComponent', () => {
  let component: CheckLunchComponent;
  let fixture: ComponentFixture<CheckLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckLunchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
