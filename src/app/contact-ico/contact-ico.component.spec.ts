import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIcoComponent } from './contact-ico.component';

describe('ContactIcoComponent', () => {
  let component: ContactIcoComponent;
  let fixture: ComponentFixture<ContactIcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactIcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
