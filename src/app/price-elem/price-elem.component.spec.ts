import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceElemComponent } from './price-elem.component';

describe('PriceElemComponent', () => {
  let component: PriceElemComponent;
  let fixture: ComponentFixture<PriceElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
