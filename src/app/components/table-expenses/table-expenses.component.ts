import { Component, OnInit } from '@angular/core';
import {animationsArr} from "../table-income/table-income.component";
import {InputIncomeComponent} from "../transaction-inputs/input-income/input-income.component";
import {MatDialog} from "@angular/material/dialog";
import {InputExpenseComponent} from "../transaction-inputs/input-expense/input-expense.component";

export interface ExpensesRow {
  day: number,
  description: string,
  category: string,
  amount: number
}

/**
 * To be removed once data store completed
 */
const EXPENSES_DATA: ExpensesRow[] = [
  {day: 1, description: 'BestBuy', category:'Entertainment', amount: 900},
  {day: 3, description: 'IGA', category:'Groceries', amount: 30},
  {day: 10, description: 'Marche PA', category:'Groceries', amount: 20.25},
  {day: 15, description: 'Rogers', category:'Cellphone', amount: 75},
]

@Component({
  selector: 'app-table-expenses',
  templateUrl: './table-expenses.component.html',
  styleUrls: ['./table-expenses.component.css', '../table-income/table-income.component.css'],
  animations: animationsArr
})
export class TableExpensesComponent {
  displayedColumns: string[] = ['day','description', 'category', 'amount'];
  dataSource = EXPENSES_DATA;

  constructor(public newTransactionDialog: MatDialog){}

  openNewTransaction(): void {
    const newTransactionRef = this.newTransactionDialog.open(InputExpenseComponent);
  }
}
