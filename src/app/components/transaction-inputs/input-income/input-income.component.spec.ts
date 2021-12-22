import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIncomeComponent } from './input-income.component';

describe('InputTransactionComponent', () => {
  let component: InputIncomeComponent;
  let fixture: ComponentFixture<InputIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
