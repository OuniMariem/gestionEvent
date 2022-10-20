import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEveComponent } from './detail-eve.component';

describe('DetailEveComponent', () => {
  let component: DetailEveComponent;
  let fixture: ComponentFixture<DetailEveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
