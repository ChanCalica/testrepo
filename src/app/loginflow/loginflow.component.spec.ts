import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginflowComponent } from './loginflow.component';

describe('LoginflowComponent', () => {
  let component: LoginflowComponent;
  let fixture: ComponentFixture<LoginflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
