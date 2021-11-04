import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiscosComponent } from './discos.component';

describe('DiscosComponent', () => {
  let component: DiscosComponent;
  let fixture: ComponentFixture<DiscosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
