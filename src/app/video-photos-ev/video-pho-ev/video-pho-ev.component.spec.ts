import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPhoEvComponent } from './video-pho-ev.component';

describe('VideoPhoEvComponent', () => {
  let component: VideoPhoEvComponent;
  let fixture: ComponentFixture<VideoPhoEvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPhoEvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPhoEvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
