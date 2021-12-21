import {Component} from '@angular/core';
import {animationsArr} from "../table-income/table-income.component";

export interface TotalExpensesRow {
  category: string,
  amount: number
}

/**
 * To be removed once data store completed
 */
const TOTAL_EXPENSES_DATA: TotalExpensesRow[] = [
  {category: 'Groceries', amount: 650},
  {category: 'Entertainment', amount: 40},
  {category: 'Internet', amount: 50},
]

@Component({
  selector: 'app-table-expenses-total',
  templateUrl: './table-expenses-total.component.html',
  styleUrls: ['./table-expenses-total.component.css', '../table-income/table-income.component.css'],
  animations: animationsArr
})
export class TableExpensesTotalComponent {
  displayedColumns: string[] = ['category', 'amount'];
  dataSource = TOTAL_EXPENSES_DATA;
}
