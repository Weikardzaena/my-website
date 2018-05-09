import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalOpenSansComponent } from './legal-open-sans.component';

describe('LegalOpenSansComponent', () => {
  let component: LegalOpenSansComponent;
  let fixture: ComponentFixture<LegalOpenSansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalOpenSansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalOpenSansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
