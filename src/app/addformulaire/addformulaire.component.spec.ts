import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformulaireComponent } from './addformulaire.component';

describe('AddformulaireComponent', () => {
  let component: AddformulaireComponent;
  let fixture: ComponentFixture<AddformulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddformulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddformulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
