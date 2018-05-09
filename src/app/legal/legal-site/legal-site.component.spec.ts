import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalSiteComponent } from './legal-site.component';

describe('LegalSiteComponent', () => {
  let component: LegalSiteComponent;
  let fixture: ComponentFixture<LegalSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
