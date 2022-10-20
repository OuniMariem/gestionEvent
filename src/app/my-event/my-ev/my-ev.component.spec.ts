import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEvComponent } from './my-ev.component';

describe('MyEvComponent', () => {
  let component: MyEvComponent;
  let fixture: ComponentFixture<MyEvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyEvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
