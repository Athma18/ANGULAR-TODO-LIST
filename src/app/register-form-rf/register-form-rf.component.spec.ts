import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormRFComponent } from './register-form-rf.component';

describe('RegisterFormRFComponent', () => {
  let component: RegisterFormRFComponent;
  let fixture: ComponentFixture<RegisterFormRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormRFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
