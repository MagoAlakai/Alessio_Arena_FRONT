import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateEventoComponent } from './update-evento.component';

describe('UpdateEventoComponent', () => {
  let component: UpdateEventoComponent;
  let fixture: ComponentFixture<UpdateEventoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
