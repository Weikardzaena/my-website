import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalSourceCodeProComponent } from './legal-source-code-pro.component';

describe('LegalSourceCodeProComponent', () => {
  let component: LegalSourceCodeProComponent;
  let fixture: ComponentFixture<LegalSourceCodeProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalSourceCodeProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalSourceCodeProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
