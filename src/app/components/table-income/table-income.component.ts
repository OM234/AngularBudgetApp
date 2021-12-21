import {Component} from '@angular/core';

export interface IncomeRow {
  day: number,
  category: string,
  amount: number
}

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
  styleUrls: ['./table-income.component.css']
})
export class TableIncomeComponent {
  displayedColumns: string[] = ['day', 'category', 'amount'];
  dataSource = INCOME_DATA;
}
