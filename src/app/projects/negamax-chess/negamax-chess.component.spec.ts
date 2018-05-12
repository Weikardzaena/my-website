import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegamaxChessComponent } from './negamax-chess.component';

describe('NegamaxChessComponent', () => {
  let component: NegamaxChessComponent;
  let fixture: ComponentFixture<NegamaxChessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegamaxChessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegamaxChessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
