import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TODOLISTComponent } from './todolist.component';

describe('TODOLISTComponent', () => {
  let component: TODOLISTComponent;
  let fixture: ComponentFixture<TODOLISTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TODOLISTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TODOLISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
