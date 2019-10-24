import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VindLostComponent } from './vind-lost.component';

describe('VindLostComponent', () => {
  let component: VindLostComponent;
  let fixture: ComponentFixture<VindLostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VindLostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VindLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
