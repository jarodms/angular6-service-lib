import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6LibComponent } from './ng6-lib.component';

describe('Ng6LibComponent', () => {
  let component: Ng6LibComponent;
  let fixture: ComponentFixture<Ng6LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng6LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
