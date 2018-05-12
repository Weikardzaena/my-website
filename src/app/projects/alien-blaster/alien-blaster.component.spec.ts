import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienBlasterComponent } from './alien-blaster.component';

describe('AlienBlasterComponent', () => {
  let component: AlienBlasterComponent;
  let fixture: ComponentFixture<AlienBlasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienBlasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienBlasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
