import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEvComponent } from './create-ev.component';

describe('CreateEvComponent', () => {
  let component: CreateEvComponent;
  let fixture: ComponentFixture<CreateEvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
