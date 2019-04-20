import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListsComponent } from './employees-lists.component';

describe('EmployeesListsComponent', () => {
  let component: EmployeesListsComponent;
  let fixture: ComponentFixture<EmployeesListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
