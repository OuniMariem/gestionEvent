import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAgencyComponent } from './top-agency.component';

describe('TopAgencyComponent', () => {
  let component: TopAgencyComponent;
  let fixture: ComponentFixture<TopAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
