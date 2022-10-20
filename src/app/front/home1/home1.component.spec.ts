import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1Component } from './home1.component';

describe('Home1Component', () => {
  let component: Home1Component;
  let fixture: ComponentFixture<Home1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
