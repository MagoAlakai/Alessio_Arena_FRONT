import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BiografiaComponent } from './biografia.component';

describe('BiografiaComponent', () => {
  let component: BiografiaComponent;
  let fixture: ComponentFixture<BiografiaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BiografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
