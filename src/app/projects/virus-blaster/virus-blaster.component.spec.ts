import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirusBlasterComponent } from './virus-blaster.component';

describe('VirusBlasterComponent', () => {
  let component: VirusBlasterComponent;
  let fixture: ComponentFixture<VirusBlasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirusBlasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirusBlasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
