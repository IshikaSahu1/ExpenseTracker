import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensetrackerlistComponent } from './expensetrackerlist.component';

describe('ExpensetrackerlistComponent', () => {
  let component: ExpensetrackerlistComponent;
  let fixture: ComponentFixture<ExpensetrackerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensetrackerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensetrackerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
