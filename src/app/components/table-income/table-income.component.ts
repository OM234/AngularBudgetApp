import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {InputIncomeComponent} from "../transaction-inputs/input-income/input-income.component";

export interface IncomeRow {
  day: number,
  category: string,
  amount: number
}

export const animationsArr: [any] = [
  trigger('fadeIn', [
    state('in', style({opacity: 1})),
    transition(':enter', [
      style({opacity: 0}),
      animate(300)
    ])
  ])
]

/**
 * To be removed once data store completed
 */
const INCOME_DATA: IncomeRow[] = [
  {day: 1, category: 'PayCheque', amount: 900},
  {day: 7, category: 'PayCheque', amount: 700},
  {day: 14, category: 'PayCheque', amount: 600},
  {day: 21, category: 'PayCheque', amount: 800},
]

@Component({
  selector: 'app-table-income',
  templateUrl: './table-income.component.html',
  styleUrls: ['./table-income.component.css'],
  animations: animationsArr
})
export class TableIncomeComponent {
  displayedColumns: string[] = ['day', 'category', 'amount'];
  dataSource = INCOME_DATA;

  constructor(public newTransactionDialog: MatDialog){}

  openNewTransaction(): void {
    const newTransactionRef = this.newTransactionDialog.open(InputIncomeComponent);
  }
}
