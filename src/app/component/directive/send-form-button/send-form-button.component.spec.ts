import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFormButtonComponent } from './send-form-button.component';

describe('SendFormButtonComponent', () => {
  let component: SendFormButtonComponent;
  let fixture: ComponentFixture<SendFormButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendFormButtonComponent]
    });
    fixture = TestBed.createComponent(SendFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
