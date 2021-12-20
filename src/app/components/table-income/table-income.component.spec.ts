import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIncomeComponent } from './table-income.component';

describe('TableIncomeComponent', () => {
  let component: TableIncomeComponent;
  let fixture: ComponentFixture<TableIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
