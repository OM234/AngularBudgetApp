import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpensesTotalComponent } from './table-expenses-total.component';

describe('TableExpensesTotalComponent', () => {
  let component: TableExpensesTotalComponent;
  let fixture: ComponentFixture<TableExpensesTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableExpensesTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExpensesTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
