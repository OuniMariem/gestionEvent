import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatComptComponent } from './creat-compt.component';

describe('CreatComptComponent', () => {
  let component: CreatComptComponent;
  let fixture: ComponentFixture<CreatComptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatComptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatComptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
