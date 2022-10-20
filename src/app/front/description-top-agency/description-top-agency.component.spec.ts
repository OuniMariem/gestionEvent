import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionTopAgencyComponent } from './description-top-agency.component';

describe('DescriptionTopAgencyComponent', () => {
  let component: DescriptionTopAgencyComponent;
  let fixture: ComponentFixture<DescriptionTopAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionTopAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionTopAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
