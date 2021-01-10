import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReestablecerPasswordComponent } from './reestablecer-password.component';

describe('ReestablecerPasswordComponent', () => {
  let component: ReestablecerPasswordComponent;
  let fixture: ComponentFixture<ReestablecerPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReestablecerPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReestablecerPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
