import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensetrackingComponent } from './expensetracking.component';

describe('ExpensetrackingComponent', () => {
  let component: ExpensetrackingComponent;
  let fixture: ComponentFixture<ExpensetrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensetrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensetrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
